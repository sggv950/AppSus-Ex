

export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-image-item item" >
    <div class="note-text-time">{{note.time}}</div><br>
        <div class="note-image-head">{{note.text}}</div>
        <img :src="note.image">
    </div>
    `,
}
