'use strict';
import emailPreview from './email-preview.cmp.js';

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        <email-preview v-for="currentMail in mails" :mail="currentMail" @click.native="emailClicked(currentMail.id)"></email-preview>
    </section>
        
    `,
    components: {
<<<<<<< HEAD
        emailPreview
    },
    methods: {
        emailClicked(emailId){
            this.$router.push(`/email/${emailId}`)
        }
=======
        emailPreview,
>>>>>>> 9c5ce968302343abb25000a4421820e224eb1d25
    }
}