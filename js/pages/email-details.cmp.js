import emailService from '../services/email.service.js'
import storageService from '../services/storage.service.js'
import utilService from '../services/util.service.js'

'use strict';

export default {
    name: 'emaildetails',
    // props:['email'],
    template: `
        <section v-if="email">
            <h2>From: {{email.from}}</h2>
            <h1>Subject: {{email.subject}}</h1>
            <h4>{{email.body}}</h4>
            <button><router-link to="/email">Back</router-link></button>
            <button @click="deleteThisEmail"><router-link to="/email">Delete Email</router-link></button>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        deleteThisEmail(){
            emailService.deleteEmail(this.email.id)
        }
        
    },
    created() {
        var emailId = this.$route.params.id;
        emailService.updateEmailRead(emailId)
            .then(email => this.email = email)
            
    }
}