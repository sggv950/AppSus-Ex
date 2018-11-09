import emailService from '../services/email.service.js'
import utilService from '../services/util.service.js'

export default {
    name: 'emailcompose',
    template: `
    <section class="email-compose-item">
        <div>
            <input class="compose-from" ref="myInput" type="text" v-model="newMail.to" placeholder="To:"><br>
            <input class="compose-subject"  type="text" v-model="newMail.subject" placeholder="Subject:"><br>
            <textarea class="rating-text" v-model="newMail.body"></textarea>
        </div>
        <router-link to="/email"><button class="controller-button"><i class="fas fa-backspace"></i></button></router-link>
        <router-link to="/email"><button @click="saveDraft" class="controller-button"><i class="fas fa-save"></i></button></router-link>
        <router-link to="/email"><button @click="sendEmail" class="controller-button"><i class="fas fa-paper-plane"></i></button></router-link>
    </section>
    `
    ,
    data() {
        return {
            newMail: {
                id: '',
                to: '',
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
            emailService.addComposedMail(this.newMail);
        },
        saveDraft() {
            this.newMail.type = 'Drafts';
            emailService.addComposedMail(this.newMail);
        }
    },
    created() {
        this.newMail.id = this.$route.params.id;
        this.newMail.to = this.$route.params.from ? decodeURI(this.$route.params.from) : '';
        this.newMail.subject = this.$route.params.subject ? 'replay: ' + decodeURI(this.$route.params.subject) : '';
        emailService.getEmailById(this.newMail.id)
        .then(email => {
            if(email) this.newMail = email;
        })
    }
}


