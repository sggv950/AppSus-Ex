import keepTodo from './keep-todo.cmp.js'
import keepText from './keep-text.cmp.js'
import keepImage from './keep-image.cmp.js'

export default {
    name:'noteslist',
    props:['notes'],
    template: `
    <section class="notes-list-section">
    <router-link exact to="/keep/composeimage/">composeImage</router-link> 
    <router-link exact to="/keep/composetodo/">composeTodo</router-link> 
    <component v-for="currNote in notes"
    :is="currNote.type"    
    :note="currNote" :key="currNote.id">
        </component>
    </section>
        
    `,
    created(){
        console.log(this.notes)
    },
    components: {
        keepTodo,
        keepImage,
        keepText
}
}
