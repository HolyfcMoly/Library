import "../core";

$.prototype.modal = function () {
    function calcScroll() {
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";
    
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        return scrollWidth;
    }
    const currentMarginRight = parseInt(window.getComputedStyle(document.body).marginRight)
    for (let i = 0; i < this.length; i++) {
        let scroll = calcScroll()
        const target = this[i].getAttribute("data-target");
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${currentMarginRight + scroll}px`;
        });
    }
    const closeElements = document.querySelectorAll("[data-close]");
    closeElements.forEach((el) => {
        $(el).click(() => {
            $(".modal").fadeOut(500);
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';

        });
    });
    $('.modal').click(e => {
        if(e.target.classList.contains('modal')) {
            $(".modal").fadeOut(500);
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
        }
    })
};

$('[data-toggle="modal"]').modal();
