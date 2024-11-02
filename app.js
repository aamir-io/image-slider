let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');

slide.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

document.body.style.overflow = 'hidden';