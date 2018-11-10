import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
import emailCompose from './pages/email-compose.cmp.js'
import keepEdit from './pages/keep/keep-edit.cmp.js'
import keepApp from './pages/keep/keep-app.cmp.js'
import keepImageCompose from './cmps/keep/keep-image-compose.cmp.js'
import keepTodoCompose from './cmps/keep/keep-todo-compose.cmp.js'
import keepTextCompose from './cmps/keep/keep-text-compose.cmp.js'
import appSusAbout from './pages/app-sus-about.cmp.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/about', component: appSusAbout},
    {path: '/email', component: emailApp},
    {path: '/keep', component: keepApp},
    {path: '/keep/compose/:type/:id', component: keepEdit},
    {path: '/keep/composeimage/', component: keepImageCompose},
    {path: '/keep/composetodo/', component: keepTodoCompose},
    {path: '/keep/composetext/', component: keepTextCompose},
    {path: '/email/compose/', component: emailCompose, children:[
      {path: ':id', component: emailCompose, children: [
        {path: ':from/:subject', component: emailCompose}
      ]},
    ]},
    {path: '/email/:id', component: emailDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;