import utilService from '../services/util.service.js'
import keepService from '../services/keep.service.js'

export default {
    name: 'composimage',
    template: `
        <section class="backgroundimage">
        <div class="logo">Keep<i class="fas fa-paperclip"></i></div>
        <router-link class="add-btn" exact to="/keep/composetext/" type="button"><i class="fas fa-font"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composeimage/" type="button"><i class="fas fa-camera-retro"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composetodo/" type="button"><i class="fas fa-list-ol"></i></router-link> 
            <div class="compose-head">New Picture Note</div>
            <div class="compose-new-image item" :style="getClass">
                <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter headline"/>
                <input class="input-compose-image" type="text" v-model="note.image" placeholder="Enter link for image"/>
                <img class="compose-image-item" :src="getImage">
                <div class="compose-image-btns">
                <label class="color-compose-img" for="color"><i class="fas fa-palette"></i></label>   
                <label for="bgcolor"><i class="fas fa-fill-drip"></i></label>   
                <i class="fas fa-ban" @click="clearImage"></i>
                <input class="note.color" type="color" id="color" v-model="note.color" value="#ffffff" :style="{opacity:0}"/>
                <input type="color" id="bgcolor" v-model="note.backgroundColor" value="#ffffff" :style="{opacity:0}"/>
                </div>
            </div>
            <div>
            <router-link class="add-btn" exact to="/keep/" type="button"><i class="fas fa-arrow-alt-circle-left"></i></router-link> 
            <button @click="saveNote" class="add-btn"><router-link to="/keep">Add Note</router-link></button>
            </div>
        </section>
    `,
    data() {
        return {
            note: {
                id: '',
                type: "keepImage",
                text: '',
                time: moment().subtract(10, 'days').calendar(),
                image: '../img/imglink.jpg',
                backgroundColor: 'white',
                color: 'black'
            }
        }
    },
    methods: {
        saveNote() {
            keepService.addSaveNote(this.note)
        },
        clearImage(){
            this.note.image = '../img/imglink.jpg';
        }
    },
    computed: {
        getImage() {
            return this.note.image
        },
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
