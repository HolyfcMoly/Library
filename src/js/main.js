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

// динамическая верстка
// $('.wrapper').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
//             <a href="" class="dropdown-item">Action</a>
//             <a href="" class="dropdown-item">Action #2</a>
//             <a href="" class="dropdown-item">Action #3</a>
//         </div>
//     </div>
//     `
// )
// $('.dropdown-toggle').dropdown()


// $('div').click(function(){
//     console.log($(this).index())
// })

// console.log($('div').eq(2).find('.more'))
// console.log($('.some').closest('.findMeq').addClass('sadsad'))
// console.log($('.more').eq(0).siblings())
$('.findMe').fadeIn(3000)