import utilService from '../services/util.service.js'

export default {
    name: 'compostext',
    template: `
    <section>
        <h1>New Text Note</h1>
    <div class="compose-new-text item" :style="getClass">
    <input class="input-compose-image" type="text" v-model="note.head" placeholder="Enter headline"/>
    <textarea rows="8" cols="30" v-model="note.text"></textarea>
            </div>
    <div class="compose-image-btns">
        Text Color:<input class="newImage.color" type="color"  v-model="note.color" value="#ffffff"/>
        Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
        </div>
        </div>
        <router-link to="/keep"><button @click="saveNote" >Add Note</button></router-link>
        </section>
        
    `,
    data() {
        return {
            note: {
                id: '',
                type: "keepText",
                text:'',
                time: moment().subtract(10, 'days').calendar(),
                backgroundColor:'white',
                color:'black'
            }
        }
    },
    methods: {
        saveNote(){
            console.log(this.note);
            keepService.addSaveNote(this.note)
        }
    },
    computed: {
        getClass(){
            return {
            color : this.note.color,
            backgroundColor: this.note.backgroundColor
            }    
    }
},
created(){
    this.id = utilService.makeId();
}
}
