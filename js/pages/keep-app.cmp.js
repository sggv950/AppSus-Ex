import keepService from '../services/keep.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'

export default {
    name: 'keepapp',
    template: `
        <section class="keep-app">
            <router-link exact to="/"><button>Appsus</button></router-link>
            <router-link exact to="/email"><button>Email</button></router-link>
            <keep-filter @filtered="setFilter"></keep-filter>
            <keep-list v-if="keeps" :notes="keeps" @move-delete-note="deleteNoteFromNotes"></keep-list>
        </section>
    `
    ,
    data() {
        return {
            keeps: null
        }
    },
    created() {
        keepService.query()
            .then(keeps => {
                this.keeps = keeps
            })
    },
    methods: {
        setFilter(filter) {
            keepService.query(filter)
                .then(keeps => this.keeps = keeps)
        },
        deleteNoteFromNotes(note) {
            keepService.deleteNote(note.id)
            .then(notes =>{
                this.keeps = notes
            })
        }
    },
    components: {
        keepFilter,
        keepList
    }

}


