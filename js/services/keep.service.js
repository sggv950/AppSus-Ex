import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'keepKey';

function query(filter=null) {
    return storageService.load(KEY)
        .then(keeps => {
            if (!keeps || !keeps.length) {
                keeps = getKeepList();
                storageService.store(KEY, keeps);
            }
            var currKeeps = keeps
            return currKeeps
               .filter(keep => keep.type.toUpperCase().includes(filter.type.toUpperCase()))
                // .filter(keep => keep.text.toUpperCase().includes(filter.text.toUpperCase()))
                // .filter(email => email.subject.toUpperCase().includes(filter.keyword.toUpperCase()))
        })
}

function getKeepList() {
    return [{
            id: utilService.makeId(),
            type: "text",
            text: 'do shop',
            time: Date.now(),
            image:'',
        },{
            id: utilService.makeId(),
            type: "text",
            text: 'do box',
            time: Date.now(),
            image:'',
        },{
            id: utilService.makeId(),
            type: "text",
            text: 'do kox',
            time: Date.now(),
            image:'',
        },{
            id: utilService.makeId(),
            type: "text",
            text: 'do shox',
            time: Date.now(),
            image:'',
        },
        ]
}

export default {
    query,
}