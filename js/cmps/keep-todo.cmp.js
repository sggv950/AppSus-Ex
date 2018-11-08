
export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-todo-item item"  :style="getClass">
            <button class="edit-button  edit-btn" @click="pin"><i class="fas fa-thumbtack"></i></button>
            <button class="delete-button  edit-btn" @click.stop.prevent="deleteNote"><i class="fas fa-trash-alt"></i></button>
        <div class="note-text-time">{{note.time}}</div><br>

    <div class="note-image-head">{{note.head}}</div>
        <ul>
        <li v-for="todo in note.todos" currTodo="todo">{{todo}}</li>
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
             },
             deleteNote(){
                 this.$emit('delete-note', this.note)
             }
           }
        }    

