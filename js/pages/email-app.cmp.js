'use strict';
import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';

export default {
    name: 'emailapp',
    template: `
        <section>
            <h1>email-app</h1>
            <div class='email-app'>
                <email-filter @filtered="setFilter"></email-filter>
                <email-list :mails="emails" @filtered="setFilter"></email-list>
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    created() {
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
    components: {
        emailList,
        emailFilter
    }
}