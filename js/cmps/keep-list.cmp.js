import keepTodo from './keep-todo.cmp.js'
import keepText from './keep-text.cmp.js'
import keepImage from './keep-image.cmp.js'

export default {
    name:'noteslist',
    props:['notes'],
    template: `
    <section class="notes-list-section">
        <component 
            v-for="currNote in notes" 
            :is="currNote.type" 
            :note="currNote" 
            :key="currNote.id"
            @click.native="selectNote(currNote.type, currNote.id)"
            to="noteDetailsLink"
<<<<<<< HEAD
            ></component>
=======
            > </component>
>>>>>>> b60027d9c8aff6f5656759c53c377b74fcc50351
    
       
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
