export default {
    name:'emailcompose',
    template: `
    <section class="email-preview-item">
    From:<input class="compose-from" ref="myInput" type="text" v-model="newMail.from"><br>
    Subject:<input class="compose-subject"  type="text" v-model="newMail.subject"><br>
        <textarea class="rating-text" rows="20" cols="40" v-model="newMail.body">
        </textarea>
    </section>
    `
,
        data(){
            return{
                newMail: {
                    from:'',
                    subject:'',
                    time:Date.now(),
                    body:'',
                }
            }
},
created(){

}    
}


