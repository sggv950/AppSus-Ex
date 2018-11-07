'use strict';
import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    name: 'emailapp',
    template: `
        <section>
            <h1>email-app</h1>
            <div class='email-app'>
                <email-list :mails="emails"></email-list>
                <email-details class="email-details"></email-details>
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            selected
        }
    },
    created() {
        showParams();
        emailService.query()
            .then(emails => {
                console.log(emails.inbox)
                this.emails = emails.inbox
            })
    },
    methods: {
        showParams(){
            console.log(this.$route.params);
        }
    },
    components: {
        emailList,
        emailDetails
    }
}