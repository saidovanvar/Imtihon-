let app = document.querySelector('#app');
let inner = [
    {
        id: 1,
        location: "г. Ташкент",
        name: "Кепки Corneliani Diamond1",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 2599000,
        img: "/img/cap.png",
    },
    {
        id: 2,
        location: "г. Ташкент",
        name: "Chevrolet Onix 1.2 Turbo в наличии",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 204000000,
        img: "/img/car.png",
    },
    {
        id: 3,
        location: "г. Ташкент",
        name: "7Saber Trucker Cap",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 280000,
        img: "/img/caps.png"
    },
    {
        id: 4,
        location: "г. Ташкент",
        name: "Оригинальные кроссовки Nike Air Max Plus",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 4820000,
        img: "/img/skirt.png",
    },
    {
        id: 5,
        location: "г. Ташкент",
        name: "Оригинальные кроссовки Nike Air Max 97",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 4820000,
        img: "/img/skirts.png",
    },
    {
        id: 6,
        location: "г. Ташкент",
        name: "Apple Watch Series 8 - USA Non active",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 4500000,
        img: "/img/watch.png",
    },
    {
        id: 7,
        location: "г. Ташкент",
        name: "Лучший кроссовер Geely Monjaro Limited Edition",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 320000000,
        img: "/img/cars.png"
    },
    {
        id: 8,
        location: "г. Ташкент",
        name: "Стайлер для волос Dyson airwrap complete long",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 50,
        img: "/img/Image (7).png",
    },
    {
        id: 9,
        location: "г. Ташкент",
        name: "Кепки Corneliani Diamond1",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 2599000,
        img: "/img/cap.png",
    },
    {
        id: 10,
        location: "г. Ташкент",
        name: "Chevrolet Onix 1.2 Turbo в наличии",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 204000000,
        img: "/img/car.png",
    },
    {
        id: 11,
        location: "г. Ташкент",
        name: "7Saber Trucker Cap",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 280000,
        img: "/img/caps.png"
    },
    {
        id: 12,
        location: "г. Ташкент",
        name: "Оригинальные кроссовки Nike Air Max Plus",
        time: "Вчера", 19: 20,
        tel: +998712007007,
        money: 4820000,
        img: "/img/skirt.png",
    }
]
let count = 8;

function main() {
    app.innerHTML = '';
    inner.slice(0, count).forEach(item => {
        let box = document.createElement('div');

        box.innerHTML = `             <div class="flex flex-col items-center justify-center bg-[#ffffff] rounded-[12px] relative mt-[100px]">
                <img class="rounded-t-[12px] w-full" src="${item.img}" alt="logo" >
                <span  class="absolute top-3 left-3 cursor-pointer like">
                    <svg width="20" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62436 2.4241C2.96537 3.18243 1.75 4.98614 1.75 7.13701C1.75 9.33441 2.64922 11.0281 3.93829 12.4797C5.00072 13.676 6.28684 14.6675 7.54113 15.6345C7.83904 15.8642 8.13515 16.0925 8.42605 16.3218C8.95208 16.7365 9.42132 17.1004 9.87361 17.3647C10.3261 17.6292 10.6904 17.7499 11 17.7499C11.3096 17.7499 11.6739 17.6292 12.1264 17.3647C12.5787 17.1004 13.0479 16.7365 13.574 16.3218C13.8649 16.0925 14.161 15.8642 14.4589 15.6345C15.7132 14.6675 16.9993 13.676 18.0617 12.4797C19.3508 11.0281 20.25 9.33441 20.25 7.13701C20.25 4.98614 19.0346 3.18243 17.3756 2.4241C15.7639 1.68739 13.5983 1.88249 11.5404 4.02065C11.399 4.16754 11.2039 4.25054 11 4.25054C10.7961 4.25054 10.601 4.16754 10.4596 4.02065C8.40166 1.88249 6.23607 1.68739 4.62436 2.4241ZM11 2.45873C8.68795 0.390153 6.09896 0.100781 4.00076 1.05987C1.78471 2.07283 0.25 4.42494 0.25 7.13701C0.25 9.80254 1.3605 11.836 2.81672 13.4757C3.98287 14.7888 5.41022 15.8879 6.67083 16.8585C6.95659 17.0785 7.23378 17.292 7.49742 17.4998C8.00965 17.9036 8.55954 18.3342 9.11682 18.6598C9.67386 18.9853 10.3096 19.2499 11 19.2499C11.6904 19.2499 12.3261 18.9853 12.8832 18.6598C13.4405 18.3342 13.9903 17.9036 14.5026 17.4998C14.7662 17.292 15.0434 17.0785 15.3292 16.8585C16.5898 15.8879 18.0171 14.7888 19.1833 13.4757C20.6395 11.836 21.75 9.80254 21.75 7.13701C21.75 4.42494 20.2153 2.07283 17.9992 1.05987C15.901 0.100781 13.3121 0.390153 11 2.45873Z" fill="#ffff"/>
                    </svg>
                </span>
                <span  class="absolute top-3 left-3 hidden cursor-pointer dislike">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.13734C0 11.0003 4.01943 13.5917 6.96173 15.9111C8 16.7296 9 17.5002 10 17.5002C11 17.5002 12 16.7296 13.0383 15.9111C15.9806 13.5917 20 11.0003 20 6.13734C20 1.27441 14.4998 -2.17429 10 2.50088C5.50016 -2.17429 0 1.27441 0 6.13734Z" fill="#76150E"/>
                    </svg>
                </span>
                <div class=" items-center  p-[20px]">
                    <span class="pt-1 pl-2 pb-1 pr-2 bg-[#EAEDF0] font-normal text-sm leading-[130%] text-[#63676C]">г. Ташкент</span>
                    <p class="font-semibold text-lg leading-[130%] text-[#16191D] mt-[16px]">${item.name}</p>
                    <p class="font-normal text-sm text-[#8E9297] leading-[130%] mt-[8px] ">Вчера, 19:20</p>
                    <p class="font-semibold text-base leading-[130%] text-[#8E9297] mt-[8px]"> +998 71 200 70 07</p>
                    <p class="font-bold text-2xl text-[#16191D] mt-[16px] ">${item.money} <span class="font-medium text-base text-[#388FF3]">UZS</span></p>
                </div>
            </div>
        </div>`

        app.appendChild(box)

        let like = box.querySelector('.like');
        let dislike = box.querySelector('.dislike');

        like.addEventListener('click', () => {
            like.style.display = 'none';
            dislike.style.display = 'block';
        })

        dislike.addEventListener('click', () => {
            dislike.style.display = 'none';
            like.style.display = 'block';
        })

    })

}

let btn = document.querySelector('#button');

btn.addEventListener('click', () => {
    count = inner.length
    main()
})
main()
