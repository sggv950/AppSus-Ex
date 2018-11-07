import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'emailsKey';

function query(filter = null) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = getEmails();
                storageService.store(KEY, emails);
            }
            console.log('emails: ', emails);
            if (filter === null) return emails;
            else return emails.filter(email => 
                            email.from.toUpperCase().includes(filter.emailBy.toUpperCase()))
        })    
}

function getEmails(){
    return { inbox : [{
        id: utilService.makeId(),
        from: "david bruho",
        subject:'fdfds',
        body: "mi est eros convallis auctor arcu dapibus himenaeos",
        time:Date.now(),
        isRead: false,   
        }
      ,
      {
        id: utilService.makeId(),
        from: "amir meyer",
        subject: 'ice Cream',
        body: "daslkdslajlskajdjaslkdskladlkasjdkasjkdjasldjaskjdlsajdlasjlksjaldjaskljlsajdkla",
        time: Date.now(),
        isRead: false,   
        },
        {
          id: utilService.makeId(),
          from: "metus hendrerit",
          subject:'',
          body: "mi est eros convallis auctor arcu dapibus himenaeos",
          time:Date.now(),
          isRead: false,   
          },
          {
            id: utilService.makeId(),
            from: "fafa asas",
            subject:'fasfas',
            body: "mi est eros convallis auctor arcu dapibus himenaeos",
            time:Date.now(),
            isRead: false,   
            },
            {
              id: utilService.makeId(),
              from: "asd dsa",
              subject:'asdasdsa',
              body: "mi est eros convallis auctor arcu dapibus himenaeos",
              time:Date.now(),
              isRead: false,   
              },
              {
                id: utilService.makeId(),
                from: "metus hendrerit",
                subject:'asdasdad',
                body: "mi est eros convallis auctor arcu dapibus himenaeos",
                time:Date.now(),
                isRead: false,   
                },
                {
                  id: utilService.makeId(),
                  from: "bruho chichi",
                  subject:'asdasdsad',
                  body: "dasdasdasdsadsadasdasge fas fa sf skaj  alskjd lksaj saldk jsadl jsadkl sja",
                  time: Date.now(),
                  isRead: false,   
                  }
                ],
                sent:[],
                drafts:[],
                }
            }

            export default {
                query
            }