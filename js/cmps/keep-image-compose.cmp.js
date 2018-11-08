import utilService from '../services/util.service.js'

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
        <button @click="">clearImage</button>
        <button @click="addImage">Add Note</button>
        </div>
        </div>
        </section>
    `,
    data() {
        return {
            note: {
                id: utilService.makeId(),
                type: "keepImage",
                text: '',
                time: moment().subtract(10, 'days').calendar(),
                image: '',
                backgroundColor:'white',
                color:'black'
            }
        }
    },
    computed: {
        getImage() {
                return this.note.image
        },
        getClass(){
            return {
            color : this.note.color,
            backgroundColor: this.note.backgroundColor
            }    
    }
},
}
