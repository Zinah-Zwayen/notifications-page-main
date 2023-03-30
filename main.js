
const markUnread = document.getElementById('mark-unread');//call mark all as unread sign
const note = document.querySelectorAll('#note');// call all unread msgs
const dot = document.querySelectorAll('.red-dot');// call all red-dot classes
const times = document.getElementById('times');// call the notification times number


markUnread.addEventListener('click', () =>{
    note.forEach(e => {
        e.classList.remove('unread')
        
    })

    dot.forEach(e => {
        e.classList.remove('red-dot')
        
    })
    times.innerText = '0';
})