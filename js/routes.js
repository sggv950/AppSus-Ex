import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
import emailCompose from './pages/email-compose.cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/emails', component: emailApp},
    {path: '/emails/:id', component: emailDetails},
    {path: '/emails/compose', component: emailCompose},
  ,
    // {path: '/emails/outbox', component: car},
    // {path: '/emails/drafts', component: carEdit},
    // {path: '/car/:carId', component: carDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;