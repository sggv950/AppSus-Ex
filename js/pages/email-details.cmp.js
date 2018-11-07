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
            <button><router-link to="/email">Back</router-link></button>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        
            
        
    },
    created() {
        var emailId = this.$route.params.id;
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
    }
}