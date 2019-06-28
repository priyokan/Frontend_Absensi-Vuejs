<template>
    <div id='sekolah'>
        <div>
            <Header></Header>
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

</style>