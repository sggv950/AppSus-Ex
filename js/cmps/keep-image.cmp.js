

export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-image-item item"  :style="getClass">
    <div class="note-text-time">{{note.time}}</div><br>
    <button class="edit-button" @click="pin">pin</button>
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
               }
           }
        }    
