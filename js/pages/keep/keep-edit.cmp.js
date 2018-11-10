import keepService from '../../services/keep.service.js'

export default {
    name: 'keeptextcompose',
    // props:['note'],
    template: `
        <section class="backgroundimage">
        <div class="logo">Keep<i class="fas fa-paperclip"></i></div>
        <router-link class="add-btn" exact to="/keep/" type="button"><i class="fas fa-arrow-alt-circle-left"></i></router-link> 
        <div class="compose-head">Edit Note</div>
            <div v-if="note.type === 'keepText'">
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
</div>
            
            <div class="compose-new-image item" :style="getClass" v-if="note.type === 'keepImage'">
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
            
            <div class="compose-new-todo item note-compose-todo" v-if="note.type === 'keepTodo' " :style="getClass">
                <div class="note-text-time">{{note.time}}</div><br>
                <input class="input-compose-image" type="text" v-model="note.head" placeholder="Enter headline"/>
                <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter todo"/>
                <button class="add-todo-btn" @click="addTodo">Add Todo</button>
                <div class="todo-list-compose">    
                <ul>
                    <li v-for="todo in note.todos">{{todo}}</li>
                    </ul>
                      </div>
                      <div class="compose-image-btns">
                      <input class="newImage.color" type="color" id="color" v-model="note.color" value="#ffffff" :style="{opacity:0}"/>
                      <label for="color"><i class="fas fa-palette"></i></label>
                      <label for="bgcolor"><i class="fas fa-fill-drip"></i></label>
                      <input type="color" id="bgcolor" v-model="note.backgroundColor" value="#ffffff" :style="{opacity:0}"/>
                  </div>
              </div>
            <router-link to="/keep"><button @click="saveNote" class="add-btn">Add Note</button></router-link>
            <router-link to="/keep"><button @click="deleteNote" class="add-btn" >Delete Note</button></router-link>
            
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
        },
        addTodo() {
            this.note.todos.push(this.note.text)
            this.note.text = ''
        },
        clearImage(){
            this.note.image = '../img/imglink.jpg'
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