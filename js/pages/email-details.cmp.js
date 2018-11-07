'use strict';

export default {
    name: 'emaildetails',
    props: ['email'],
    template: `
        <section class="email-details">
            <h2>{{email.from}}</h2>
            <h3>{{email.time}}</h3>
            <h1>{{email.subject}}</h1>
            <p>{{email.body}}</p>
        </section>
    `,
    methods: {

    },
    computed: {

    }
}