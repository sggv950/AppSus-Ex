import emailService from '../services/email.service.js'
import storageService from '../services/storage.service.js'
import utilService from '../services/util.service.js'

'use strict';

export default {
    name: 'emaildetails',
    // props:['email'],
    template: `
        <section v-if="email">
            <h1>{{email.subject}}</h1>
            <h4>{{email.body}}</h4>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        loadEmailData() {
            var emailId = this.$route.params.emailId;
            console.log(emailId);
            // emailService.getEmailById(emailId)
            // .then(email => this.email = email)
        }
    },
    created() {
        this.loadEmailData();
    }
}