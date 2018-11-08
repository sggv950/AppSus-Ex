export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-text-item item" :style="getClass">
        <div class="note-text-time">{{note.time}}</div><br>
        <button class="edit-button">pin</button>
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
}
}

