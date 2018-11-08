
export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-todo-item item">
    <div class="note-text-time">{{note.time}}</div><br>
    <div class="note-image-head">{{note.text}}</div>
        <ul>
        <li v-for="todo in note.todos" currTodo="todo">{{todo.todo}}</li>
        </ul>
    </div>
    `,
}
