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
<<<<<<< HEAD
=======
            @pin="onPin"
>>>>>>> 0f397e2f5b5d0211c35e117aba66214987c2f3ad
            ></component>
    
       
    </section>
        
    `,
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
