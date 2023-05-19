import '../core'

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            const sibling = this[i].nextElementSibling

            $(this[i]).toggleClass(headActive);
            $(sibling).toggleClass(contentActive);

            if(this[i].classList.contains(headActive)) {
                sibling.style.maxHeight = sibling.scrollHeight + paddings + 'px'
            } else {
                sibling.style.maxHeight = '0px'
            }
        })
    }
}
$('.accordion-head').accordion()