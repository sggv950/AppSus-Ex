'use strict';

export default {
    name:'emailpreview',
    props:['mail'],
    template: `
        <h1>{{mail.from}}</h1>
    `
}