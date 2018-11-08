import keepTodo from './keep-todo.cmp.js'
import keepText from './keep-text.cmp.js'
import keepImage from './keep-image.cmp.js'
import keepService from '../services/keep.service.js';
import storageService from '../services/storage.service.js'

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
            @pin="onPin"
            ></component>
    
       
    </section>
        
    `,data(){
        return{
            counter:0
        }
    },
    created(){
    },
    methods:{
        selectNote(noteType, noteId){
            this.$router.push(`/keep/compose/${noteType}/${noteId}`)
            
        },
        onPin(note){
            var first = note;
            this.notes.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
            storageService.store('keepKey',this.notes)
        },
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
