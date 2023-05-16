import $ from './lib/lib'


$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});


// $('div').click(function(){
//     console.log($(this).index())
// })

// console.log($('div').eq(2).find('.more'))
// console.log($('.some').closest('.findMeq').addClass('sadsad'))
// console.log($('.more').eq(0).siblings())
$('.findMe').fadeIn(3000)