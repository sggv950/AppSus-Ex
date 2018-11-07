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
            return emailDB.filter(email => email.type.toUpperCase().includes(filter.type.toUpperCase()))
                .filter(email => email.from.toUpperCase().includes(filter.keyword.toUpperCase()))
            // .filter(email => email.subject.toUpperCase().includes(filter.keyword.toUpperCase()))
        })
}

function updateEmailRead(id) {
    return storageService.load(KEY)
        .then(emails => {
            console.log('serviceeee', id)
            var currEmail = emails.find(email => {
                return email.id === id
            })
            console.log(currEmail)
            if (currEmail.type === "Inbox" && !currEmail.is) {
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
                    emails.splice(idx, 1)
                    return emails
                }).then(emails => {
                    emails.push(newEmail)
                    console.log(emails)
                    return emails
                }).then(emails => {
                    storageService.store(KEY, emails)
                })
            } else {
                storageService.load(KEY)
                .then(emails => {
                    emails.push(newEmail)
                    console.log(emails)
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
        from: "david bruho",
        subject: 'fdfds',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
    }
        ,
    {
        id: utilService.makeId(),
        from: "amir meyer",
        subject: 'ice Cream',
        body: "daslkdslajlskajdjaslkdskladlkasjdkasjkdjasldjaskjdlsajdlasjlksjaldjaskljlsajdkla",
        time: Date.now(),
        isRead: true,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        from: "metus hendrerit",
        subject: 'asdasd asdsad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        from: "fafa asas",
        subject: 'fasfas',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        from: "asd dsa",
        subject: 'asdasdsa',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        from: "metus hendrerit",
        subject: 'asdasdad',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
    },
    {
        id: utilService.makeId(),
        from: "bruho chichi",
        subject: 'asdasdsad',
        body: "dasdasdasdsadsadasdasge fas fa sf skaj  alskjd lksaj saldk jsadl jsadkl sja",
        time: Date.now(),
        isRead: false,
        type: 'Inbox'
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