import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from './email-details.cmp.js'
import utilService from '../services/util.service.js'

export default {
    name: 'emailapp',
    template: `
        <section class="email-app">
            <div class="email-app-header">
                <i class="fas fa-envelope fa-3x "></i>
                <div>
                    <router-link exact to="/"><i class="fas fa-compass fa-3x"></i></router-link>
                    <router-link exact to="/keep/"><i class="fas fa-clipboard-list fa-3x"></i></router-link>
                </div>
            </div>
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
            counter: 0
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
