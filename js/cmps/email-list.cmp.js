'use strict';

import emailPreview from './email-preview.cmp.js';

export default {
    name:'emaillist',
    template: `
    <section>
        <h1>a email list</h1>
        <email-preview></email-preview>
    </section>
        
    `,
    components: {
        emailPreview
    }
}