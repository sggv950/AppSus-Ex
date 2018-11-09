import utilService from '../../services/util.service.js'
import keepService from '../../services/keep.service.js'

export default {
    name: 'composimage',
    template: `
    <section class="backgroundimage">
    <div class="logo">Keep<i class="fas fa-paperclip"></i></div>
    <router-link class="add-btn" exact to="/keep/composetext/" type="button"><i class="fas fa-font"></i></router-link> 
    <router-link class="add-btn" exact to="/keep/composeimage/" type="button"><i class="fas fa-camera-retro"></i></router-link> 
    <router-link class="add-btn" exact to="/keep/composetodo/" type="button"><i class="fas fa-list-ol"></i></router-link> 
    <div class="compose-head">New todo List</div>
    <div class="compose-new-todo item" :style="getClass">
    <input class="input-compose-image" type="text" v-model="note.head" placeholder="Enter headline"/>
    <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter todo"/>
    <button class="add-todo-btn" @click="addTodo">Add Todo</button>
    <div class="todo-list-compose">    
    <ul>
        <li v-for="todo in note.todos">{{todo}}</li>
        </ul>
          </div>
          <div class="compose-image-btns">
          <input class="newImage.color" type="color" id="bgcolor"  v-model="note.color" value="#ffffff" :style="{opacity:0}"/>
          <label for="bgcolor"><i class="fas fa-fill-drip"></i></label>
              <label for="color"><i class="fas fa-palette"></i></label>
              <input type="color" id="color" v-model="note.backgroundColor" value="#ffffff" :style="{opacity:0}"/>
              </div>
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
                head: '',
                type: "keepTodo",
                text: '',
                todos: [],
                time: moment().subtract(10, 'days').calendar(),
                image: '',
                backgroundColor: 'white',
                color: 'black'
            }
        }
    },
    methods: {
        addTodo() {
            this.note.todos.push(this.note.text)
            this.note.text = ''
        },
        saveNote() {
            console.log(this.note)
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
