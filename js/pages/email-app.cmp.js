'use strict';

import emailList from '../cmps/email-list.cmp.js';

export default {
    name: 'emailapp',
    template: `
        <section>
            <h1>email-app</h1>
            <div class='email-app'>
                <email-list></email-list>
            </div>
        </section>
    `,
    components: {
        emailList
    }
}