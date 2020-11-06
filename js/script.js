'use strict'

document.querySelector('.toggle-menu').addEventListener('click', function(event) {
    document.querySelector('.menu-content').classList.add('is-open');
})

document.querySelector('.close-button').addEventListener('click', function(event) {
    document.querySelector('.menu-content').classList.remove('is-open');
})