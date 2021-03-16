/*Step One: Create the continuous "while" loop that stops if you enter "quit"*/
let input = prompt('What would you like to do?');
const todo = ['Do laundry', 'Walk the dog'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new To Do?');
        todo.push(newTodo);
        console.log(`${newTodo} added to list.`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Okay, enter index to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index.');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Quit the app as per requested.');

