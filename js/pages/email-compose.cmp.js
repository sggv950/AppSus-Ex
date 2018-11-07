import emailService from '../services/email.service.js'
import utilService from '../services/util.service.js'

export default {
    name: 'emailcompose',
    template: `
    <section class="email-preview-item">
        <div>
            From:<input class="compose-from" ref="myInput" type="text" v-model="newMail.from"><br>
            Subject:<input class="compose-subject"  type="text" v-model="newMail.subject"><br>
            <textarea class="rating-text" rows="20" cols="100" v-model="newMail.body"></textarea>
        </div>
        <router-link to="/email"><button @click="saveDraft">Save Draft</button></router-link>
        <router-link to="/email"><button @click="sendEmail">Send</button></router-link>
    </section>
    `
    ,
    data() {
        return {
            newMail: {
                id: '',
                from: '',
                subject: '',
                time: Date.now(),
                body: '',
                type: ''
            }
        }
    },
    methods: {
        sendEmail() {
            this.newMail.type = 'Outbox';
            console.log(this.newMail);
            emailService.addComposedMail(this.newMail);
        },
        saveDraft() {
            this.newMail.type = 'Drafts';
            emailService.addComposedMail(this.newMail);
        }
    },
    created() {
        console.log(this.$route.params)
        this.newMail.id = this.$route.params.id;
        emailService.getEmailById(this.newMail.id)
        .then(email => {
            if(email) this.newMail = email;
        })
    }
}


