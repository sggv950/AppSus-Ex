<<<<<<< HEAD
'use strict';
import emailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        <email-preview v-for="currentMail in mails" :mail="currentMail"></email-preview>
        <email-status :progmail="mails"></email-status>
    </section>
        
    `,
    created(){
        console.log('listcreated', this.    mails);
        
    },
    components: {
        emailPreview,
        emailStatus
    }
=======
'use strict';
import emailPreview from './email-preview.cmp.js';

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        <email-preview v-for="currentMail in mails" :mail="currentMail"></email-preview>
    </section>
        
    `,
    components: {
        emailPreview,
    }
>>>>>>> cfbdad35937f960421894586338adca68990bfff
}