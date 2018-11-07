'use strict';
import emailService from '../services/email.service.js'
<<<<<<< HEAD
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from './email-details.cmp.js'
=======
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
>>>>>>> 9c5ce968302343abb25000a4421820e224eb1d25

export default {
    name: 'emailapp',
    template: `
        <section>
            <h1>email-app</h1>
            <div class='email-app'>
<<<<<<< HEAD
                <email-list :mails="emails"></email-list>
                <email-details class="email-details"></email-details>
=======
                <email-filter @filtered="setFilter"></email-filter>
                <email-list :mails="emails" @filtered="setFilter"></email-list>
>>>>>>> 9c5ce968302343abb25000a4421820e224eb1d25
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
<<<<<<< HEAD
            selected
=======
>>>>>>> 9c5ce968302343abb25000a4421820e224eb1d25
        }
    },
    created() {
        showParams();
        emailService.query()
            .then(emails => {
                console.log(emails.inbox)
                this.emails = emails.inbox
            })
    },methods:{
        setFilter(filter) {
        emailService.query(filter)
        .then(emails => this.emails = emails)
        }
    },
    methods: {
        showParams(){
            console.log(this.$route.params);
        }
    },
    components: {
        emailList,
<<<<<<< HEAD
        emailDetails
=======
        emailFilter
>>>>>>> 9c5ce968302343abb25000a4421820e224eb1d25
    }
}