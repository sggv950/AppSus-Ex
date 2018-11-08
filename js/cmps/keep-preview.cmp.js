import keepTodo from './keep-todo.cmp.js'
import keepText from './keep-text.cmp.js'
import keepImage from './keep-image.cmp.js'

export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <section>
                <component v-bind:is="keepTodo">
                </component>
    </section>
                `,
    data() {
        return{
            currType: 'keep'+this.note.type
        }
        },
        created(){
            console.log(this.currType)
        },
        components:{
            keepTodo,
            keepImage,
            keepText
        }
}
