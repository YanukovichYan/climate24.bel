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


    // let product = document.getElementsByClassName('btn');

    let cartArray = [];

    $('.btn').click(function (event) {

        let product = $(event.target).siblings('.item-text').text();

        // let close1 = $('.close-1').css('display', 'block');
        // let close2 = $('.close-2').css('display', 'block');
        // let close3 = $('.close-3').css('display', 'block');

        let string = '•    ' + product.slice(0, 20) + '...';

        // string.append('.close-1');

        cartArray.push(string);

        let go = $('.product-1').text(cartArray[0]);
        let go1 = $('.product-2').text(cartArray[1]);
        let go2 = $('.product-3').text(cartArray[2]);


        console.log(cartArray);

    });


};