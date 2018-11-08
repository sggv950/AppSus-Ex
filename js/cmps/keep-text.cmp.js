export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-text-item item">
        <div class="note-text-time">{{note.time}}</div><br>
        <div class="note-text-text">{{note.text}}</div>
    </div>
    `,
}
