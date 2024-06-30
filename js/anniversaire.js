$(function () {
    $('nav ul').fadeIn(800).css('display', 'flex');
    let $title = $('.title h1')
    $('#firstSection .title').fadeIn(900).css('text-align', 'center')
    $('.linkToInput').on('click', function (event) {
        event.preventDefault()
        $('.input').show().css('display', 'block')
        $('input:text').on('keypress', function(d){
            let $p = $('#display').fadeIn(500)
            $('.input').append($p)
        })
        $('#display').on('click', function(){
            $title.append(" " + $('input:text').val());
        })
    });
});