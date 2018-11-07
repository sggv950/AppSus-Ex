'use strict';

export default {
    name:'emailpreview',
    props:['mail'],
    template: `
    <section class="email-preview-item">
        <h1>{{mail.from}}</h1>
        <p>{{mail.subject}}</p>
            </section>
    `
}