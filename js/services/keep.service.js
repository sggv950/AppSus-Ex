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

function getKeepList() {
    return [{
            id: utilService.makeId(),
            type: "keepText",
            head:'shopping',
            text: 'dont forget tell shimon he cant go on like this, its really to much already...',
            time: moment().subtract(10, 'days').calendar(),
            image:'',
        },{
            id: utilService.makeId(),
            type: "keepImage",
            text: 'My Owl',
            time: moment().subtract(10, 'days').calendar(),
            image:'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/cafb806e-cf0d-41f7-a008-604d297b875d/08-owl-opt-small.jpg',
        },{
            id: utilService.makeId(),
            type: "keepTodo",
            text:'ToDo',
            todos: [{todo:'playCard',isDone:false},{todo:'playSoccer',isDone:false},{todo:'PlayBasketball',isDone:false}],
            time: moment().subtract(10, 'days').calendar(),
            image:'',
        },{
            id: utilService.makeId(),
            type: "keepText",
            text: 'i forget to tell nimrod that i like baklawa',
            time: moment().subtract(10, 'days').calendar(),
            image:'',
        },
        {
            id: utilService.makeId(),
            type: "keepTodo",
            text:'Shopping',
            todos: [{todo:'bread',isDone:false},{todo:'Margarina',isDone:false},{todo:'Milk',isDone:false},{todo:'bread',isDone:false},{todo:'Margarina',isDone:false},{todo:'Milk',isDone:false},{todo:'bread',isDone:false},{todo:'Margarina',isDone:false},{todo:'Milk',isDone:false}],
            time: moment().subtract(10, 'days').calendar(),
            image:'',        },
        {
            id: utilService.makeId(),
            type: "keepImage",
            text: 'My Egg',
            time: moment().subtract(10, 'days').calendar(),
            image:'https://www.eggnutritioncenter.org/content/themes/wojo-theme/assets/dist/img/eggfacts.png',
                },
        ]
}

export default {
    query,
}