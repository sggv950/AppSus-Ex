import keepTodo from './keep-todo.cmp.js'

export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <component>
    </component>
    `,
    data() {
        return{
            currType: this.note.type
        }
        },
        created(){
            console.log(this.currType)
        }
}
