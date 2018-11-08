import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'emailsKey';
var emailDB = [];


function query(filter = { keyword: '', type: 'Inbox', }) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = getEmails();
                storageService.store(KEY, emails);
            }
            emailDB = emails
            // if(filter.type === 'true') return emailDB.filter(email => email.isRead)
            // else if(filter.type === 'false') return emailDB.filter(email => !email.isRead)
            return emailDB
            .filter(email => email.type.toUpperCase().includes(filter.type.toUpperCase()))
            .filter(email => email.subject.toUpperCase().includes(filter.keyword.toUpperCase()))
            
            // .filter(email => email.subject.toUpperCase().includes(filter.keyword.toUpperCase()))
        })
}

function updateEmailRead(id) {
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => {
                return email.id === id
            })
            if (currEmail.type === "Inbox" && !currEmail.isRead) {
                currEmail.isRead = true;
                storageService.store(KEY, emails)
            }
            return currEmail
        })
}

function getEmailById(id) {
    return storageService.load(KEY)
        .then(emails => {
            return emails.find(email => email.id === id)
        })
}

function getEmailIdx(id) {
    return storageService.load(KEY)
        .then(emails => {
            return emails.findIndex(email => email.id === id)
        })
}

function deleteEmail(id) {
    getEmailIdx(id)
        .then(idx => {
            idx
            storageService.load(KEY)
                .then(emails => {
                    emails.splice(idx, 1)
                    return emails
                })
                .then(emails => {
                    storageService.store(KEY, emails)
                })
        })
}

function addComposedMail(newEmail) {
        getEmailIdx(newEmail.id)
        .then(idx => {
            if (idx >= 0) {
                storageService.load(KEY)
                .then(emails => {
                    emails[idx] = newEmail
                    return emails
                }).then(emails => {
                    storageService.store(KEY, emails)
                })
            } else {
                storageService.load(KEY)
                .then(emails => {
                    emails.push(newEmail)
                    return emails
                }).then(emails => {
                    storageService.store(KEY, emails)
                })
            }
        })
}

function addOrReplaceDraft(id, email) {

}

function getEmails() {
    return [{
        id: utilService.makeId(),
        to:'',
        from: "david bruho",
        subject: 'fdfds',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    }
        ,
    {
        id: utilService.makeId(),
        to:'',
        from: "amir meyer",
        subject: 'ice Cream',
        body: "daslkdslajlskajdjaslkdskladlkasjdkasjkdjasldjaskjdlsajdlasjlksjaldjaskljlsajdkla",
        time: moment().subtract(10, 'days').calendar(),
        isRead: true,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "metus hendrerit",
        subject: 'asdasd asdsad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "fafa asas",
        subject: 'fasfas',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "asd dsa",
        subject: 'asdasdsa',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "metus hendrerit",
        subject: 'asdasdad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "bruho chichi",
        subject: 'asdasdsad',
        body: "dasdasdasdsadsadasdasge fas fa sf skaj  alskjd lksaj saldk jsadl jsadkl sja",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "david bruho",
        subject: 'fdfds',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    }
        ,
    {
        id: utilService.makeId(),
        to:'',
        from: "amir meyer",
        subject: 'ice Cream',
        body: "daslkdslajlskajdjaslkdskladlkasjdkasjkdjasldjaskjdlsajdlasjlksjaldjaskljlsajdkla",
        time: moment().subtract(10, 'days').calendar(),
        isRead: true,
        type: 'Outbox'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "metus hendrerit",
        subject: 'asdasd asdsad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'saassa fffff',
        from: "",
        subject: 'fasfas',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Drafts'
    },
    {
        id: utilService.makeId(),
        to:'',
        from: "asd dsa",
        subject: 'asdasdsa',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        to:'hererit aaaa',
        from: "",
        subject: 'asdasdad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Outbox'
    },
    {
        id: utilService.makeId(),
        to:'bobo chichi',
        from: "",
        subject: 'asdasdsad',
        body: "dasdasdasdsadsadasdasge fas fa sf skaj  alskjd lksaj saldk jsadl jsadkl sja",
        time: moment().subtract(10, 'days').calendar(),
        isRead: false,
        type: 'Outbox'
    }
    ]
}

export default {
    query,
    getEmailById,
    updateEmailRead,
    getEmailIdx,
    deleteEmail,
    addComposedMail
}