import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/emails', component: emailApp, children:[
      {path: ':id', emailDetails}
    ]},
    // {path: '/emails/inbox', component: about},
    // {path: '/emails/outbox', component: car},
    // {path: '/emails/drafts', component: carEdit},
    // {path: '/car/:carId', component: carDetails},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;