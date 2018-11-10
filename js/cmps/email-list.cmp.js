import emailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';
import emailService from '../services/email.service.js';
import storageService from '../services/storage.service.js'

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        <div class="email-preview-headline" v-if="mails.length">
            <div class="preview-name inline" @click.stop="sortByName" :style="{cursor:'pointer'}">From / To</div>
            <div class="preview-subject inline" @click="sortBySubject"  :style="{cursor:'pointer'}">Subject</div>
            <div class="preview-time inline" @click="sortByTime"  :style="{cursor:'pointer'}">At</div>
        </div>
        <email-preview class="email-preview-item" v-for="currentMail in mails" :mail="currentMail" :key="currentMail.id"></email-preview>
        
        <email-status :progmail="mails" @count="showCount"></email-status>
    </section>
        
    `,data(){
        return{
            counter: 0
        }
    },
    created(){
        
    },
    methods:{
    showCount(count){
        if(count <= 0) return 0;
        this.counter = count;
        this.$emit('show-count', this.counter);
    },
    sortByName(){
        this.mails.sort(function(a, b) {
            var nameA = a.from.toUpperCase() // ignore upper and lowercase
            var nameB = b.from.toUpperCase() // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
    })
    storageService.store('emailsKey',this.mails)
},
    sortBySubject(){
        this.mails.sort(function(a, b) {
            var nameA = a.subject.toUpperCase() // ignore upper and lowercase
            var nameB = b.subject.toUpperCase() // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
    })
    storageService.store('emailsKey',this.mails)
    },
    sortByTime(){
        this.mails.sort(function (a, b) {
            return a.time - b.time;
          });
          storageService.store('emailsKey',this.mails)
    }
    },
    components: {
        emailPreview,
        emailStatus
    }
}
