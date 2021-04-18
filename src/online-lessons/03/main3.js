//событие -event
//обработчик/слушатель/подписчик -handler (handler or listener, subscriber)
//браузер создаёт спец.объект, в котором собраны сведения о произошедшем событии(event,ev,e)
//вызывает калбэк (обработчик)
//объект (е) по умолчанию передаётся в обработчик

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

// sm.onclick = () => alert('yo!')
// sm.onclick = null //убили предыдущую строку
//
// const fn = () => alert('yo')
// sm.onclick = fn

function onEventHandler(e) {
    console.dir(e.type)// смотрим какое событие произошло
    console.log(e.altKey)// хажат ли alt
}

// sm.onclick = onEventHandler
// sm.onmouseover = onEventHandler
// sm.onmouseleave = onEventHandler

function onClickHandler(ev) {
    console.log(ev.target.id)// вывести id
}
function onClickHandlerCurentTarget(ev) {
    console.log(ev.currentTarget.id)// вывести id
}

// sm.onclick = onClickHandler

//md.onclick = onClickHandler
md.onclick = onClickHandlerCurentTarget

// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события
