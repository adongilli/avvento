document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById('card-template');
    const container = document.getElementById('container');
     const days = [
                {
            day: 1,
            type: "recipe",
            title: "Gingerbread man ricetta",
            image: "",
            text: "",
            pdf: "",
            download: true
        },
        {
            day: 2,
            type: "quiz",
            title: "Che tipo di ballerina natalizia sei?",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 3,
            type: "video",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 4,
            type: "puzzle",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 5,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 6,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 7,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 8,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 9,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 10,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 11,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 12,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 13,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 14,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 15,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 16,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 17,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 18,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 19,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 20,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 21,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 22,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 23,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        },
        {
            day: 24,
            type: "",
            title: "",
            image: "",
            text: "",
            pdf: ""
        }
    ]
    
    const quiz = {
        title: "Che ballerina sei a Natale?",
        questions: [
            {
                q: "",
                ans: [
                    {text: ""},
                    {text: ""},
                    {text: ""}
                ]
            }
        ],
        results: {
            a: {text: ""},
            b: {text: ""},
            c: {text: ""}
        }
    };
    
    for(let i = 1; i <= 24; i++){
         const d = days[i - 1];
        const clone = template.content.cloneNode(true);
        const dayBox = clone.querySelector('.day-box');
        const numberSpan = clone.querySelector('.card-number');
        const back = clone.querySelector('.card-back');
        dayBox.setAttribute('data-day', i);
        numberSpan.textContent = i;
        dayBox.addEventListener('click', () => {
            dayBox.classList.toggle('is-flipped');
        });
        container.appendChild(clone);
        const content = document.createElement("div");
        content.className = "cont";
        content.innerHTML=`<h2 class="title">${d.title}</h2>`;
        if(download === true){
            content.innerHTML=`<img class="logo-download src="icon-download.png">`;
            };
        back.appendChild(content);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    //const openedDaysFromBackend = [?];
    const dayBoxes = document.querySelectorAll('.day-box');

    dayBoxes.forEach(box =>{ 

        const dayNum = parseInt(box.getAttribute('data-day'));

        const boxDate = new Date(today.getFullYear(), 10, dayNum);
        boxDate.setHours(0, 0, 0, 0);

        if(boxDate.getTime() === today.getTime()){
            box.classList.add('today');
            box.classList.add('selected')
        }
        else if(boxDate > today){
            box.classList.add('locked')
        }
        else{
            /*if(openedDaysFromBackend.includes(dayNum)){
                box.classList.add('open');
            }
            else{
                box.classList.add('closed');
            }*/
           box.classList.add('closed');
        }
    });
});


