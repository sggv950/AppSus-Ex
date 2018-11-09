
export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <section class="todo-page">
    <div class="note-todo-item note"  :style="getClass">
            <button class="edit-button  edit-btn" @click.stop="pin"><i class="fas fa-thumbtack"></i></button>
            <button class="delete-button  edit-btn" @click.stop.prevent="deleteNote"><i class="fas fa-trash-alt"></i></button>
        
            <div class="note-text-time">{{note.time}}</div><br>

    <div class="note-image-head">{{note.head}}</div>
        <ul>
        <li v-for="todo in note.todos" currTodo="todo">{{todo}}</li>
        </ul>
        </div>
    </section>

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
             },
             deleteNote(){
                 this.$emit('delete-note', this.note)
             }
           }
        }    

