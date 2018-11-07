import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
<<<<<<< HEAD
import emailCompose from './pages/email-compose.cmp.js'
// import about from './pages/about.js'
=======
>>>>>>> b1a80699d5a78a6d1213781ea2532cba24d32000


const routes = [
    {path: '/', component: appsus},
<<<<<<< HEAD
    {path: '/emails', component: emailApp},
    {path: '/emails/:id', component: emailDetails},
    {path: '/emails/compose', component: emailCompose},
  ,
    // {path: '/emails/outbox', component: car},
    // {path: '/emails/drafts', component: carEdit},
    // {path: '/car/:carId', component: carDetails},
=======
    {path: '/email', component: emailApp},
    {path: '/email/:id', component: emailDetails}
>>>>>>> b1a80699d5a78a6d1213781ea2532cba24d32000
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;