'use strict';
import emailPreview from './email-preview.cmp.js';

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        <email-preview v-for="currentMail in mails" :mail="currentMail" ></email-preview>
    </section>
        
    `,
    components: {
        emailPreview,
    }
}