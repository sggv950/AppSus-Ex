import keepPreview from './keep-preview.cmp.js';

export default {
    name:'noteslist',
    props:['notes'],
    template: `
    <section>
        <keep-preview v-for="currentNote in notes" :note="currentNote"></keep-preview>
    </section>
        
    `,
    created(){
    },
    components: {
        keepPreview,
    }
}
