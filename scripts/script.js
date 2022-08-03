'use strict';

window.onload = function () {


    // let listItems = document.querySelectorAll('.shops-menu ul li');
    //
    //
    // for (let i = 0; i < listItems.length; i++) {
    //     if (listItems[i].classList.contains('active')) {
    //         listItems[i].classList.remove('active');
    //     }
    // }
    // e.target.classList.add('active');
    // e.stopPropagation();

    let firstCity = document.getElementById('first-city'),
        secondCity = document.getElementById('second-city'),
        thirdCity = document.getElementById('third-city'),
        fourthCity = document.getElementById('fourth-city'),

        // map = document.getElementsByClassName('map')[0],
        map_1 = document.getElementsByClassName('map-1')[0],
        map_2 = document.getElementsByClassName('map-2')[0],
        map_3 = document.getElementsByClassName('map-3')[0],
        map_4 = document.getElementsByClassName('map-4')[0],

        one = document.getElementsByClassName('one')[0],
        two = document.getElementsByClassName('two')[0],
        three = document.getElementsByClassName('three')[0],
        four = document.getElementsByClassName('four')[0];


    one.onclick = function () {
        map_2.style.display = 'none';
        map_3.style.display = 'none';
        map_4.style.display = 'none';
        map_1.style.display = 'block';

        firstCity.classList.add('active-color');
        secondCity.classList.remove('active-color');
        thirdCity.classList.remove('active-color');
        fourthCity.classList.remove('active-color');

        one.classList.add('active');
        two.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');
    };

    two.onclick = function () {
        map_1.style.display = 'none';
        map_3.style.display = 'none';
        map_4.style.display = 'none';
        map_2.style.display = 'block';

        secondCity.classList.add('active-color');
        firstCity.classList.remove('active-color');
        thirdCity.classList.remove('active-color');
        fourthCity.classList.remove('active-color');

        two.classList.add('active');
        one.classList.remove('active');
        three.classList.remove('active');
        four.classList.remove('active');

    };

    three.onclick = function () {
        map_1.style.display = 'none';
        map_2.style.display = 'none';
        map_3.style.display = 'none';
        map_3.style.display = 'block';

        thirdCity.classList.add('active-color');
        firstCity.classList.remove('active-color');
        secondCity.classList.remove('active-color');
        fourthCity.classList.remove('active-color');

        three.classList.add('active');
        one.classList.remove('active');
        two.classList.remove('active');
        four.classList.remove('active');
    };

    four.onclick = function () {
        map_1.style.display = 'none';
        map_2.style.display = 'none';
        map_3.style.display = 'none';
        map_4.style.display = 'block';

        fourthCity.classList.add('active-color');
        firstCity.classList.remove('active-color');
        secondCity.classList.remove('active-color');
        thirdCity.classList.remove('active-color');

        four.classList.add('active');
        one.classList.remove('active');
        two.classList.remove('active');
        three.classList.remove('active');
    };


    const products = [
        {
            nameProduct: 'Г/Ц Блинчики с мясом вес, Россия',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'src="images/rating-1.png',
            description: '2'
        },
        {
            nameProduct: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'src="images/rating-2.png',
            description: '3'
        },
        {
            nameProduct: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'src="images/rating-3.png',
            description: '5'
        },
        {
            nameProduct: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
            price: 50.50,
            priceDiscount: 44.50,
            discountPercent: 50,
            imgProduct: 'src="images/rating-4.png',
            description: '4'
        },
    ]


    let btn = document.getElementsByClassName('btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {

            let product = $(e.target).siblings('.item-text').text();

            let string = '•    ' + product.slice(0, 20) + '...';

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
