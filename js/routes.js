import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
import emailCompose from './pages/email-compose.cmp.js'
import keepApp from './pages/keep-app.cmp.js'
import keepImageCompose from './cmps/keep-image-compose.cmp.js'
import keepTodoCompose from './cmps/keep-todo-compose.cmp.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/email', component: emailApp},
    {path: '/keep', component: keepApp},
    {path: '/keep/composeimage/', component: keepImageCompose},
    {path: '/keep/composetodo/', component: keepTodoCompose},
    {path: '/email/compose/', component: emailCompose, children:[
      {path: ':id', component: emailCompose}
    ]},
    {path: '/email/:id', component: emailDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;