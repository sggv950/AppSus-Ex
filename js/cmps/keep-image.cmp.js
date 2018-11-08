

export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-image-item item"  :style="getClass">
    <button class="edit-button  edit-btn" @click.stop.prevent="pin"><i class="fas fa-thumbtack"></i></button>
    <button class="delete-button  edit-btn" @click.stop.prevent="deleteNote"><i class="fas fa-trash-alt"></i></button>
    <div class="note-text-time">{{note.time}}</div><br>
    <div class="note-image-head">{{note.text}}</div>
    <img :src="note.image">
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
