import emailService from '../services/email.service.js'
import storageService from '../services/storage.service.js'
import utilService from '../services/util.service.js'

'use strict';

export default {
    name: 'emaildetails',
    // props:['email'],
    template: `
        <section v-if="email" class="email-details">
            <h3>From: {{email.from}}</h3>
            <h4>At: {{email.time}}</h4>
            <h3>Subject: {{email.subject}}</h3>
            <p>{{email.body}}</p>
            <router-link to="/email"><button class="controller-button"><i class="fas fa-backspace"></i></button></router-link>
            <router-link  exact :to="composeEmailLink"><button class="controller-button"><i class="fas fa-reply"></i></button></router-link>
            <router-link to="/email"><button @click="deleteThisEmail" class="controller-button"><i class="fas fa-trash-alt"></i></button></router-link>
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
    computed:{
        composeEmailLink(){
            var newId = utilService.makeId();
            return `/email/compose/${newId}/${this.email.from}/${this.email.subject}`
        }
    },
    created() {
        var emailId = this.$route.params.id;
        emailService.updateEmailRead(emailId)
            .then(email => this.email = email)
            
    }
}