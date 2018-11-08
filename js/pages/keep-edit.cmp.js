import keepService from '../services/keep.service.js'

export default {
    name: 'keeptextcompose',
    // props:['note'],
    template: `
        <section>
            <div v-if="note.type === 'keepText'" :style="getClass">
                <h2>Time {{note.head}}</h2>
                <textarea v-model="note.text"></textarea>
                <div>
                    Text Color:<input class="note.color" type="color"  v-model="note.color" value="#ffffff"/>
                    Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
                    <button >clearImage</button>
                </div>
            </div>

            
            <div class="compose-new-image item" :style="getClass" v-if="note.type === 'keepImage'">
                <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter headline"/>
                <input class="input-compose-image" type="text" v-model="note.image" placeholder="Enter link for image"/>
                <img class="compose-image-item" :src="getImage">
                <div>
                    Text Color:<input class="note.color" type="color"  v-model="note.color" value="#ffffff"/>
                    Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
                    <button >clearImage</button>
                </div>
            </div>
            
            <div class="note-todo-item item" v-if="note.type === 'keepTodo' " :style="getClass">
                <div class="note-text-time">{{note.time}}</div><br>
                <div class="note-image-head">{{note.head}}</div>
                <ul>
                    <li v-for="todo in note.todos" currTodo="todo">{{todo}}</li>
                </ul>
                <div>
                    Text Color:<input class="note.color" type="color"  v-model="note.color" value="#ffffff"/>
                    Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
                    <button >clearImage</button>
                </div>
            </div>
            
            <router-link to="/keep"><button @click="saveNote" >Save Note</button></router-link>
            <router-link to="/keep"><button @click="deleteNote" >Delete Note</button></router-link>
            
        </section>
    `,
    data() {
        return {
            note: {
                id: '',
                head: '',
                type: '',
                text: '',
                time: moment().subtract(10, 'days').calendar(),
                image: '',
                backgroundColor:'',
                color:'',
                todos: []
            }
        }
    },
    methods: {
        saveNote(){
            keepService.addSaveNote(this.note)
        },
        deleteNote(){
            keepService.deleteNote(this.note.id)
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
        this.note.id = this.$route.params.id;
        this.note.type = this.$route.params.type;
        keepService.getNotesById(this.note.id)
            .then(note => {
                if (note) {
                    this.note = note;
                }
            })
    }
}