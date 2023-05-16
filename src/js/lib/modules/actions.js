import "../core";

$.prototype.html = function (content) {
    for(let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content
        } else {
            return this[i].innerHTML
        }
    }

    return this;
}

$.prototype.eq = function (i) {
    const swap = this[i]
    const objLength = Object.keys(this).length

    for (let i =0; i < objLength; i++) {
        delete this[i]
    }

    this[0] = swap
    this.length = 1
    return this;
}

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children]
    const findMyIndex = (item) => {
        return item == this[0]
    }

    return childs.findIndex(findMyIndex)
}

$.prototype.find = function (selector) {
    // общее кол-во элементов
    let numberOfItems = 0;
    // кол-во записанных элементов
    let counter = 0;
    // создаем поверхностную копию
    const copyObj = Object.assign({}, this);
    //цикл закончит работу тогда, когда в copyObj закончатся el
    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector)
        if(arr.length === 0) {
            continue
        }

        for(let j = 0; j < arr.length; j++) {
            // перезаписываем в this новые свойства
            this[counter] = arr[j]
            counter++
        }

        numberOfItems += arr.length
    }

    this.length = numberOfItems

    const objLength = Object.keys(this).length
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems]
    }
    return this; // возвращаем новый объект
}

$.prototype.closest = function(selector) {
    let counter = 0;
    for(let i = 0; i < this.length; i++) {
        if(!this[i].closest(selector)) {
            this[i].parentNode
        } else {
            this[i] = this[i].closest(selector)
        }
        counter++
    }

    const objLength = Object.keys(this).length
    for(; counter < objLength; counter++) {
        delete this[counter]
    }
    return this;
}

$.prototype.siblings = function () {
    // общее кол-во элементов
    let numberOfItems = 0;
    // кол-во записанных элементов
    let counter = 0;
    // создаем поверхностную копию
    const copyObj = Object.assign({}, this);
    //цикл закончит работу тогда, когда в copyObj закончатся el
    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children

        for(let j = 0; j < arr.length; j++) {
            if(copyObj[i] === arr[j]) {
                continue
            }
            // перезаписываем в this новые свойства
            this[counter] = arr[j]
            counter++
        }

        numberOfItems += arr.length - 1
    }

    this.length = numberOfItems

    const objLength = Object.keys(this).length
    for(; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems]
    }
    return this; // возвращаем новый объект
}
