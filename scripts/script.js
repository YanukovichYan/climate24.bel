'use strict';

window.onload = function () {

    let listItems = document.getElementsByClassName('w');

    let one = document.getElementsByClassName('one');

    let map = document.getElementsByClassName('map');

    let idx = null;

    function color() {
        one[idx].classList.add('active');
        listItems[idx].classList.add('active-color');
        map[idx].classList.add('map-1');
    }

    for (let i = 0; i < one.length; i++) {
        one[i].onclick = function () {

            for (let i = 0; i < one.length; i++) {
                for (let i = 0; i < one.length; i++) {
                    listItems[i].classList.remove('active-color');
                    one[i].classList.remove('active');
                    map[i].classList.remove('map-1');
                }
            }
            idx = i;
            color();
        }
    }


    const products = [
        {
            nameProduct: 'Г/Ц Блинчики с мясом вес, Россия',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'images/rating-1.png',
            description: '2'
        },
        {
            nameProduct: 'Молоко Простоквашино паст. питьевое цельное отборное...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'images/rating-2.png',
            description: '3'
        },
        {
            nameProduct: 'Колбаса сырокопченая Мясная История Сальчичон и Тоскан...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'images/rating-3.png',
            description: '5'
        },
        {
            nameProduct: 'Сосиски вареные Мясная История Молочные и С сыро...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'images/rating-4.png',
            description: '4'
        },
    ]

    let btn = document.getElementsByClassName('btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {

            let idx = null;
            idx = i;
            let product = btn[i];

            let string = '•    ' + products[idx].nameProduct.slice(0, 20) + '...';
            let title = document.getElementsByClassName('purchases-title')[0];

            let div = document.createElement('div');
            div.className = "product";
            div.innerHTML = string;
            title.after(div);

            let prd = document.getElementsByClassName('product')[0];

            prd.insertAdjacentHTML("beforeend", '<svg class="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '            <path d="M15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.2929 16.7071ZM4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L4.70711 3.29289ZM16.7071 4.70711C17.0976 4.31658 17.0976 3.68342 16.7071 3.29289C16.3166 2.90237 15.6834 2.90237 15.2929 3.29289L16.7071 4.70711ZM3.29289 15.2929C2.90237 15.6834 2.90237 16.3166 3.29289 16.7071C3.68342 17.0976 4.31658 17.0976 4.70711 16.7071L3.29289 15.2929ZM16.7071 15.2929L4.70711 3.29289L3.29289 4.70711L15.2929 16.7071L16.7071 15.2929ZM15.2929 3.29289L3.29289 15.2929L4.70711 16.7071L16.7071 4.70711L15.2929 3.29289ZM3.29289 4.70711L9.29289 10.7071L10.7071 9.29289L4.70711 3.29289L3.29289 4.70711ZM9.29289 10.7071L15.2929 16.7071L16.7071 15.2929L10.7071 9.29289L9.29289 10.7071Z"\n' +
                '                  fill="#7A869A"/>\n' +
                '        </svg>');

            let close = document.getElementsByClassName('close')[0];

            close.onclick = function (e) {
                div.remove();
            }
        };
    }
};
