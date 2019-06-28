import sekolah from './components/Sekolah.vue'
import home from './components/Home.vue'
import manage from './components/manage.vue'
import login from './components/login/main.vue'
import addAdmin from "./components/addAdmin/addAdmin.vue"

export function routes(){
    return [
        {
          path:'/sekolah',
          name:'sekolah',
          component:sekolah,
          children:[
            {
                path:'/sekolah/home',
                name:'home',
                component:home,
            },
            {
                path:'/sekolah/manage/:id',
                name:'manage',
                component:manage,
            },
            {
                path:'/sekolah/add/admin',
                name:'addAdmin',
                component:addAdmin,
            },
            
          ]
        },
        {
          path:'/login',
          name:'login',
          component:login,
        },
        {
          path:'*',
          redirect:'/login'
        }
      ]
}