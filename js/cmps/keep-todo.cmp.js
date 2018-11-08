
export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-todo-item item"  :style="getClass">
    <div class="note-text-time">{{note.time}}</div><br>
    <button class="edit-button" @click="pin">pin</button>
    <div class="note-image-head">{{note.head}}</div>
        <ul>
        <li v-for="todo in note.todos" currTodo="todo">{{todo}}</li>
        </ul>
    </div>
    `,
        computed:{
            getClass(){
                return {
                color : this.note.color,
                backgroundColor: this.note.backgroundColor
                }    
        
            } 
           },
           methods:{
            pin(){
                this.$emit('pin', this.note) 
             }
           }
        }    

