
const markUnread = document.getElementById('mark-unread');//call mark all as unread sign
const unread = document.querySelectorAll('.unread');// call all unread msgs
const dot = document.querySelectorAll('.red-dot');// call all red-dot classes
const times = document.getElementById('times');// call the notification times number


markUnread.addEventListener('click', () =>{
    unread.forEach(e => {
        e.classList.remove('unread')
        
    })

    dot.forEach(e => {
        e.classList.remove('red-dot')
        
    })
    times.innerText = '0';
})