
export default {
    name: 'composimage',
    template: `
    <section>
    <div class="compose-new-todo item" :style="getClass">
    <input class="input-compose-image" type="text" v-model="note.head" placeholder="Enter headline"/>
    <input class="input-compose-image" type="text" v-model="note.text" placeholder="Enter todo"/>
    <button class="add-todo-btn" @click="addTodo">Add Todo</button>
        <ul>
        <li v-for="todo in note.todos">{{todo}}</li>
        </ul>
    </div>
    <div class="compose-image-btns">
        Text Color:<input class="newImage.color" type="color"  v-model="note.color" value="#ffffff"/>
        Background Color:<input type="color" v-model="note.backgroundColor" value="#ffffff" />
        <button @click="">clearImage</button>
        </div>
        </div>
        </section>
        
    `,
    data() {
        return {
            note: {
                id: '',
                head:'',
                type: "keepImage",
                text:'',
                todos: [],
                time: moment().subtract(10, 'days').calendar(),
                image: '',
                backgroundColor:'white',
                color:'black'
            }
        }
    },
    methods:{
        addTodo(){
            this.note.todos.push(this.note.text)
            this.note.text = ''
            console.log(this.note.todos)
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
}