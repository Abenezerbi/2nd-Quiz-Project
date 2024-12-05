document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const resetListButton = document.getElementById('resetListButton');
    const taskList = document.getElementById('taskList');
    const counter = document.getElementById('counter');

    let tasksCompleted = 0;

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', () => {
                if (!listItem.classList.contains('done')) {
                    listItem.classList.add('done');
                    tasksCompleted++;
                } else {
                    listItem.classList.remove('done');
                    tasksCompleted--;
                }
                counter.textContent = `Tasks Completed: ${tasksCompleted}`;
            });
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    resetListButton.addEventListener('click', () => {
        taskList.innerHTML = '';
        tasksCompleted = 0;
        counter.textContent = `Tasks Completed: ${tasksCompleted}`;
    });
});
