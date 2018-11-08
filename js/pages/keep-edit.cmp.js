import keepService from '../services/keep.service.js'

export default {
    name: 'keeptextcompose',
    // props:['note'],
    template: `
        <section>
            <div v-if="note.type === 'keepText'">
                <h2>Time {{note.head}}</h2>
                <textarea v-model="note.text"></textarea>
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
            
            <div class="note-todo-item item" v-if="note.type === 'keepTodo' ">
                <div class="note-text-time">{{note.time}}</div><br>
                <div class="note-image-head">{{note.text}}</div>
                <ul>
                    <li v-for="todo in note.todos" currTodo="todo">{{todo.todo}}</li>
                </ul>
            </div>
            
            <router-link to="/keep"><button @click="saveNote" >Save Note</button></router-link>
            
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
                backgroundColor:'white',
                color:'black',
                todos: []
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
        console.log('params', this.$route.params);
        this.note.id = this.$route.params.id;
        this.note.type = this.$route.params.type;
        keepService.getNotesById(this.note.id)
            .then(note => {
                if (note) {
                    this.note = note;
                }
            })
        console.log(this.note)
    }
}