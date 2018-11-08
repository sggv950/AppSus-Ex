import emailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';

export default {
    name:'emaillist',
    props:['mails'],
    template: `
    <section>
        Unread mails:{{this.counter}}
        <email-preview v-for="currentMail in mails" :mail="currentMail"></email-preview>
        <email-status :progmail="mails" @count="showCount"></email-status>
    </section>
        
    `,data(){
        return{
            counter:0
        }
    },
    created(){
        
    },
    methods:{
    showCount(count){
        if(count <= 0) return 0;
        this.counter = count;
    }
    },
    components: {
        emailPreview,
        emailStatus
    }
}
