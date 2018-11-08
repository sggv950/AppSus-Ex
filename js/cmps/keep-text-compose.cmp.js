import utilService from '../services/util.service.js'
import keepService from '../services/keep.service.js'

export default {
    name: 'compostext',
    template: `
    <section class="backgroundimage">
        <div class="logo">Keep<i class="fas fa-paperclip"></i></div>
        <router-link class="add-btn" exact to="/keep/composetext/" type="button"><i class="fas fa-font"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composeimage/" type="button"><i class="fas fa-camera-retro"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composetodo/" type="button"><i class="fas fa-list-ol"></i></router-link> 
        <div class="compose-head">New Text Note</div>
        <div class="compose-new-text item" :style="getClass">
             <input class="input-compose-image" type="text" v-model="note.head" placeholder="Enter headline"/>
             <textarea class="text-area-new" v-model="note.text" placeholder="enter text here"></textarea>
            <div class="compose-image-btns">
                <input class="newImage.color" type="color" id="color" v-model="note.color" value="#ffffff" :style="{opacity:0}"/>
                <label for="color"><i class="fas fa-palette"></i></label>
                <label for="bgcolor"><i class="fas fa-fill-drip"></i></label>
                <input type="color" id="bgcolor" v-model="note.backgroundColor" value="#ffffff" :style="{opacity:0}"/>
            </div>
        </div>
        <router-link class="add-btn" exact to="/keep/" type="button"><i class="fas fa-arrow-alt-circle-left"></i></router-link> 
        <router-link to="/keep"><button @click="saveNote" class="add-btn">Add Note</button></router-link>
        </section>
        
    `,
    data() {
        return {
            note: {
                id: '',
                type: "keepText",
                text: '',
                time: moment().subtract(10, 'days').calendar(),
                backgroundColor: 'white',
                color: 'black'
            }
        }
    },
    methods: {
        saveNote() {
            keepService.addSaveNote(this.note)
        }
    },
    computed: {
        getClass() {
            return {
                color: this.note.color,
                backgroundColor: this.note.backgroundColor
            }
        }
    },
    created() {
        this.note.id = utilService.makeId();
    }
}
