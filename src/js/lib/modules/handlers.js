import $ from "../core";

$.prototype.on = function(event, call) {
    if(!event || !call) {
        return this
    }
    for(let i = 0; i < this.length; i++) {
        this[i].addEventListener(event, call)
    }
    return this
}
$.prototype.off = function(event, call) {
    if(!event || !call) {
        return this
    }
    for(let i = 0; i < this.length; i++) {
        this[i].removeEventListener(event, call)
    }
    return this
}

$.prototype.click = function(handler) {
    for(let i = 0; i < this.length; i++) {
        if(handler) {
            this[i].addEventListener('click', handler)
        } else {
            this[i].click()
        }
    }
    return this
}