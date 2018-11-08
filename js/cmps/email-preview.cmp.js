import emailService from '../services/email.service.js'

export default {
    name: 'emailpreview',
    props: ['mail'],
    template: `

    <div class="email-preview-item">
    <router-link :to="emailDetailsLink">
        <div class="preview-name inline">{{mail.from}}</div>
        <div class="preview-subject inline">{{mail.subject}}</div>
        <div class="preview-time inline">{{mail.time}}</div>
        </router-link>
    </div>
    `,
    computed: {
        emailDetailsLink() {
            if(this.mail.type === 'Drafts') {return `/email/compose/${this.mail.id}`}
            else {return `/email/${this.mail.id}`}
        },
        fixedTime(){
            
        }
    }
}
