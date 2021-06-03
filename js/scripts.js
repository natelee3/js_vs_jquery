'use strict';

//Vanilla JS
document.addEventListener("DOMContentLoaded", function () {
    console.log('Vanilla JS DOM Content Loaded')
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click', function () {
        alert('Button 1 has been clicked')
    })
})

    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log({data})
            return data
        })
        .catch(error => {
            console.error({error})
            return error;
        })

//jQuery version
$(document).ready(function () {
    console.log('jQuery DOM Content Loaded');
    $('#button2').on('click', function () {
        alert('Button 2 has been clicked')
    })


    $.ajax({
        url: ('https://api.chucknorris.io/jokes/random?category=dev'),
        type: 'GET',
        success: function (data) {
            console.table(data)
        },
        error: function (error) {
            console.error('ERROR', error);
        }
    })

})