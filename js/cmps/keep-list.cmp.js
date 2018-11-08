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
        <component 
            v-for="currNote in notes" 
            :is="currNote.type" 
            :note="currNote" 
            :key="currNote.id"
            @click.native="selectNote(currNote.type, currNote.id)"
            to="noteDetailsLink"
            >
    
       
    </section>
        
    `,
    created(){
        console.log(this.notes)
    },
    methods:{
        selectNote(noteType, noteId){
            this.$router.push(`/keep/compose/${noteType}/${noteId}`)
            
        }
    },
    computed: {
        noteDetailsLink(){
            return `/keep/compose/${noteType}/${noteId}`;
        }
    },
    components: {
        keepTodo,
        keepImage,
        keepText
}
}
