import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'emailsKey';

function query(filter = { keyword: '', type: 'Inbox', }) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = getEmails();
                storageService.store(KEY, emails);
            }
            var currEmails = emails
            return currEmails.filter(email => email.type.toUpperCase().includes(filter.type.toUpperCase()))
                .filter(email => email.from.toUpperCase().includes(filter.keyword.toUpperCase()))
                // .filter(email => email.subject.toUpperCase().includes(filter.keyword.toUpperCase()))
        })
}

function getEmailById(id) {
    return storageService.load(KEY)
        .then(emails => {
            console.log('service', id)
            return emails.find(email => {
                return email.id === id
            })
        })
}



function updateEmailRead(id) {
    getEmailById(id)
        .then(email => email.isRead = true)
        .then()
}

function getEmails() {
    return [{
            id: utilService.makeId(),
            from: "david bruho",
            subject: 'fdfds',
            body: "mi est eros convallis auctor arcu dapibus himenaeos",
            time: Date.now(),
            isRead: true,
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
            isRead: true,
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
    getEmailById
}