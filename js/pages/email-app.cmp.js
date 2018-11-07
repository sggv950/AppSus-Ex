import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailDetails from './email-details.cmp.js'
import utilService from '../services/util.service.js'

export default {
    name: 'emailapp',
    template: `
        <section>
            <router-link exact to="/"><button>Appsus</button></router-link>
            <router-link exact to="/keep/"><button>Notes</button></router-link>
            
            <h1>email-app</h1>
            <router-link exact :to="composeEmailLink"><button>New Message</button></router-link> 
            <div class='email-app'>
                <email-filter @filtered="setFilter"></email-filter>
                <email-list v-if="emails" :mails="emails"></email-list>
                
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            selectedMail: null
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
