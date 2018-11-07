function query() {

}

function createEmail(){
    return {
            id:'',
            from:'',
            subject:'',
            body: '',
            isRead: false,
            sentAt: ''

    }
}

var gEmailsDB = [
    {
    inbox:[{}], 
    outbox:[{}],
    drafts:[{}]
    }
];