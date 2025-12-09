document.getElementById('buttonCreate').addEventListener('click', function() {
    const p = document.createElement('p');
    p.textContent = 'Hello!';
    document.body.appendChild(p);
});

document.getElementById('buttonAdd').addEventListener('click', function() {
    const counter = document.getElementById('counter');
    counter.textContent = Number(counter.textContent) + 1;
});

let interval = null;
document.getElementById('buttonStart').addEventListener('click', function() {
    if (interval !== null) {
        return;
    }
    interval = setInterval(function() {
        const timer = document.getElementById('timer');
        timer.textContent = Number(timer.textContent) + 1;
    }, 1000);
});

document.getElementById('buttonStop').addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
});

document.getElementById('deleteList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

document.getElementById('buttonAddTask').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() === '') {
        return;
    }
    const li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('tasks').appendChild(li);

    input.value = '';
});

document.getElementById('tasks').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

document.getElementById('textArea').addEventListener('input', function() {
    const text = document.getElementById('textArea').value;
    document.getElementById('charCount').textContent = text.length;
});

document.getElementById('buttonToggle').addEventListener('click', function() {
    const box = document.getElementById('toggleBox');
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});