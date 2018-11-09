import keepService from '../../services/keep.service.js'
import keepFilter from '../../cmps/keep/keep-filter.cmp.js'
import keepList from '../../cmps/keep/keep-list.cmp.js'

export default {
    name: 'keepapp',
    template: `
        <section class="keep-app">
        <div class="hamburger-back-layer" v-if="isOpen" @click="isOpen=!isOpen"></div>
        <header class="app-header">
        <div class="app-head-container flex space-between">
            <router-link exact to="/">
            <div class="app-logo">App<i class="fas fa-horse horsie" :style="{color:'green'}"></i></div>
            </router-link>


        <nav class="app-nav-container">
                <button @click="isOpen=!isOpen" class="app-nav-hamburger"><i class="fas fa-bars main-ham" :style="{color:'black'}"></i></button>
                <div class="btns-container flex space-around direction-column"
                :class="{isOpen:isOpen}">    
                    <router-link exact to="/email/" class="app-nav-item">Emails</router-link> 
                    <router-link exact to="/keep/" class="app-nav-item">keep</router-link>
                    <router-link exact to="/about/" class="app-nav-item">About</router-link>
                </div>
            </nav>
        </div>
    </header>
    
        <div class="logo logo-main">Keep<i class="fas fa-paperclip"></i></div>
            <keep-filter @filtered="setFilter"></keep-filter>
            <keep-list v-if="keeps" :notes="keeps" @move-delete-note="deleteNoteFromNotes"></keep-list>
        </section>
    `
    ,
    data() {
        return {
            keeps: null,
            isOpen:false
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


