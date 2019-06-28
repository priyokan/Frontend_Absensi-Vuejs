<template>
    <div id='sekolah'>
        <div>
            <Header style=""></Header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Home from './Home'

export default {
    name : 'sekolah',
    components : {
        Header,
        Home,
    }, 
    data() {
        return {
        }
    },
   

    methods: {

    },
}
</script>
<style>
.bg{
    background: linear-gradient(rgb(48, 148, 131),rgb(26, 54, 73));
    width: 100vw;
    height: 50vw;
    position: absolute;
    top: -33px;
    z-index:-100 ;    
}
.bg .bg-kcl{
    background: url('../assets/admin.jpg.svg');
    background-size: contain;
    opacity: 0,8;
    width:90%;
    height: 60%;
    position: relative;
    top: 30%;
}
</style>