'use strict';

import emailApp from './email-app.cmp.js';

export default {
    name: 'appsus',
    template: `
    <section>
        <h1>Appsus</h1>
        <email-app></email-app>
    </section>
    `,
    components: {
        emailApp
    }
}