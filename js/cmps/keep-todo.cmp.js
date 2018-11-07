
export default {
    name: 'notepreview',
    props: ['note'],
    template: `
    <div class="note-preview-item">
        <div class="note-time">{{note.id}}</div>
        <div class="note-name">{{note.type}}</div>
        <div class="note-subject">{{note.text}}</div>
    </div>
    `,
}
