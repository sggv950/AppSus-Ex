import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from './email-details.cmp.js'
import utilService from '../services/util.service.js'

export default {
    name: 'emailapp',
    template: `
        <section class="email-app">
        <div class="hamburger-back-layer" v-if="isOpen" @click="isOpen=!isOpen"></div>
        <header class="app-header">
        <div class="app-head-container flex space-between">
            <router-link exact to="/">
            <div class="app-logo">App<i class="fas fa-horse horsie" :style="{color:'green'}"></i></div>
            </router-link>


        <nav class="app-nav-container email-container-nav">
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
            <div>
                <email-filter @filtered="setFilter"></email-filter>
                <div class="email-compose-status">
                    <button class="compose-email-button"><router-link  exact :to="composeEmailLink"><i class="fas fa-pen-alt fa-2x"></i></router-link></button> 
                    <h4>Unread mails: {{this.counter}}</h4>
                </div>
                <email-list v-if="emails" :mails="emails" @show-count="showCount"></email-list>
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            selectedMail: null,
            counter: 0,
            isOpen : false
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },methods:{
        setFilter(filter) {
        emailService.query(filter)
        .then(emails => this.emails = emails)
        },
        showCount(counter){
            this.counter = counter;
        }
    },
    computed:{
        composeEmailLink(){
            var newId = utilService.makeId();
            return `/email/compose/${newId}`
        }
    },
    components: {
        emailList,
        emailFilter,
        emailDetails
    }
}
