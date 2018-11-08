export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-text-item item" :style="getClass">
        <div class="note-text-time">{{note.time}}</div><br>
        <button class="edit-button" @click.stop.prevent="pin">pin</button>
        <button class="delete-button" @click.stop.prevent="deleteNote"><i class="fas fa-trash-alt"></i></button>
        <div class="note-text-text">{{note.text}}</div>
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

