import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'keepKey';

function query(filter={type:'',keyword:''}) {
    return storageService.load(KEY)
        .then(keeps => {
            if (!keeps || !keeps.length) {
                keeps = getKeepList();
                storageService.store(KEY, keeps);
            }
            var currKeeps = keeps
            return currKeeps
            .filter(keep => keep.text.toUpperCase().includes(filter.keyword.toUpperCase()))
            .filter(keep => keep.type.toUpperCase().includes(filter.type.toUpperCase()))
        })
}

function getNotesById(id) {
    return storageService.load(KEY)
        .then(notes => {
            return notes.find(note => note.id === id)
        })
}

function getNotesIdx(id) {
    return storageService.load(KEY)
        .then(notes => {
            return notes.findIndex(note => note.id === id)
        })
}

function deleteNote(id) {
   return getNotesIdx(id)
        .then(idx => {
            return storageService.load(KEY)
                .then(notes => {
                    console.log('service before' , notes)
                    notes.splice(idx, 1)
                    storageService.store(KEY, notes);
                    return notes
                })
        })
}

function addSaveNote(currNote) {
    getNotesIdx(currNote.id)
    .then(idx => {
        if (idx >= 0) {
            storageService.load(KEY)
            .then(notes => {
                notes[idx] = currNote
                return notes
            }).then(notes => {
                storageService.store(KEY, notes)
            })
        } else {
            storageService.load(KEY)
            .then(notes => {
                notes.push(currNote)
                return notes
            }).then(notes => {
                storageService.store(KEY, notes)
            })
        }
    })
}

function getKeepList() {
    return [{
            id: utilService.makeId(),
            type: "keepText",
            head:'shopping',
            text: 'dont forget tell shimon he cant go on like this, its really to much already...',
            time: moment().subtract(10, 'days').calendar(),
            image:'',
            color:'',
            backgroundColor:'',
        },{
            id: utilService.makeId(),
            type: "keepImage",
            text: 'My Owl',
            time: moment().subtract(10, 'days').calendar(),
            image:'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cafb806e-cf0d-41f7-a008-604d297b875d/08-owl-opt-small.jpg',
            color:'',
            backgroundColor:'',
        },{
            id: utilService.makeId(),
            type: "keepTodo",
            head:'ToDo',
            text: '',
            todos: ['playCard','playSoccer','PlayBasketball'],
            time: moment().subtract(10, 'days').calendar(),
            image:'',
            color:'',
            backgroundColor:'',
        },{
            id: utilService.makeId(),
            type: "keepText",
            text: 'i forget to tell nimrod that i like baklawa',
            time: moment().subtract(10, 'days').calendar(),
            image:'',
            color:'',
            backgroundColor:'',
        },
        {
            id: utilService.makeId(),
            type: "keepTodo",
            head:'Shopping',
            text: '',
            todos: ['bread','Margarina','Milk','bread','Margarina','Milk'],
            time: moment().subtract(10, 'days').calendar(),
            image:'',
            color:'',
            backgroundColor:'',
        },
        {
            id: utilService.makeId(),
            type: "keepImage",
            text: 'My Egg',
            time: moment().subtract(10, 'days').calendar(),
            image:'https://www.eggnutritioncenter.org/content/themes/wojo-theme/assets/dist/img/eggfacts.png',
            color:'',
            backgroundColor:'',
                },
        ]
}

export default {
    query,
    getNotesById,
    getNotesIdx,
    deleteNote,
    addSaveNote
}