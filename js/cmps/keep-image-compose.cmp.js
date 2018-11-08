import utilService from '../services/util.service.js'
import keepService from '../services/keep.service.js'

export default {
    name: 'composimage',
    template: `
        <section>
            <h1>New IMAGE Note</h1>
            <div class="compose-new-image item" :style="getClass">
                <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter headline"/>
                <input class="input-compose-image" type="text" v-model="note.image" placeholder="Enter link for image"/>
                <img class="compose-image-item" :src="getImage">
                <div class="compose-image-btns">
                    Text Color:<input class="note.color" type="color"  v-model="note.color" value="#ffffff"/>
                    Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
                    <button @click="clearImage">clearImage</button>
                </div>
            </div>
            <div>
            <button @click="saveNote" ><router-link to="/keep">Add Note</router-link></button>
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
                image: '',
                backgroundColor: 'white',
                color: 'black'
            }
        }
    },
    methods: {
        saveNote() {
            console.log(this.note);
            keepService.addSaveNote(this.note)
        },
        clearImage(){
            this.note.image = '';
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
