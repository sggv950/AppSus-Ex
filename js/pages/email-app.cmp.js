'use strict';
import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js';

export default {
    name: 'emailapp',
    template: `
        <section>
            <h1>email-app</h1>
            <div class='email-app'>
                <email-list :mails="emails"></email-list>
            </div>
        </section>
    `,
    data() {
        return {
            emails: null,
            isDraft: false,
            isInbox: false,
            isOutbox: false,
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                console.log(emails.inbox)
                this.emails = emails.inbox
            })
    },
    components: {
        emailList
    }
}