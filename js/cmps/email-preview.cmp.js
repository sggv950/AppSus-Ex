<<<<<<< HEAD
'use strict';

export default {
    name:'emailpreview',
    props:['mail'],
    template: `
    <section class="email-preview-item">
        <div class="preview-name inline">{{mail.from}}</div>
        <div class="preview-subject inline">{{mail.subject}}</div>
        <div class="preview-time inline">{{mail.time}}</div>
    </section>
    `
=======
'use strict';

export default {
    name:'emailpreview',
    props:['mail'],
    template: `
    <section class="email-preview-item">
        <div class="preview-name inline">{{mail.from}}</div>
        <div class="preview-subject inline">{{mail.subject}}</div>
        <div class="preview-time inline">{{mail.time}}</div>
            </section>
    `
>>>>>>> cfbdad35937f960421894586338adca68990bfff
}