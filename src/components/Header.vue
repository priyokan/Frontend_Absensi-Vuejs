<template>
    <div>
    <b-navbar type="light" style="" variant="light" class="shadow p-2 mb-5 position-static">
        <b-container>
        <b-navbar-nav>
            <img class="ml-5 mr-3" :src='image' alt="">
        <b-nav-item class="mt-2 mb-1 bold dark" to='/sekolah/home'>Home</b-nav-item>

        <b-nav-item-dropdown hr class="mt-2 bold" text="Management" right>
            <b-dropdown-item to='/sekolah/manage/guru'>Guru</b-dropdown-item>
            <b-dropdown-item to='/sekolah/manage/siswa' >Siswa</b-dropdown-item>
            <b-dropdown-item to='/sekolah/manage/kelas' >Kelas</b-dropdown-item>
            <b-dropdown-item to='/sekolah/manage/mapel' >Mapel</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav style="position:relative;left:69%;float:right">
        <b-nav-item class="mt-2 mb-1 bold dark" to='/sekolah/add/admin' >add admin</b-nav-item>
        <b-nav-item-dropdown hr class="mt-2 bold" text="" right>
            <b-dropdown-item to='/sekolah/manage/guru'>pengaturan</b-dropdown-item>
            <b-dropdown-item to='/sekolah/manage/siswa' >log out</b-dropdown-item>
        </b-nav-item-dropdown>    
        </b-navbar-nav>            
        </b-navbar-nav>
        </b-container>
    </b-navbar>
    </div>
</template> 
<script>
import image from './../assets/smkbisa.png'

export default {
    data() {
        return {
            image : image
        }
    },   
    methods: {
       
    },
}
</script>
<style>
    .bold{
        font-weight: 900;
    }
    img{
        width: 3.5%;
        height: 3.5%;
    }
</style>
