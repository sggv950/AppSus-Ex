import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
import emailCompose from './pages/email-compose.cmp.js'
import keepApp from './pages/keep-app.cmp.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/email', component: emailApp},
    {path: '/email/compose', component: emailCompose},
    {path: '/email/:id', component: emailDetails},
    {path: '/keep', component: keepApp}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;