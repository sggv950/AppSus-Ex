'use strict';

import emailApp from './email-app.cmp.js';
import keepApp from './keep-app.cmp.js'

export default {
    name: 'appsus',
    template: `    
    <section>    
    <router-link exact to="/email/">Emails</router-link> 
    <router-link exact to="/keep/">keep</router-link>
    </section>
    `,
    components: {
        emailApp,
        keepApp
    }
}