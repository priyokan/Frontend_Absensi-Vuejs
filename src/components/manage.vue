<template>
        
<div>
    <b-container >
      <b-row align-h='start' class="m-2">
        <TambahSiswa v-if="content=='siswa'"> </TambahSiswa>
        <tambahGuru v-else-if="content=='guru'"></tambahGuru>
        <tambahMapel v-else-if="content=='mapel'"></tambahMapel>
        <tambahKelas v-else-if="content=='kelas'" :kelass='datas'></tambahKelas>{{content}}
      </b-row>  
        <b-card-group deck>
            <b-card  class="mt-2">
                <div v-if="content=='siswa'">
                    <b-tabs tabs align="left">
                        <b-tab title="Semua Siswa" active class="p-4">
                            <tableSiswa :siswas='datas' @edit='edit'></tableSiswa>
                        </b-tab>
                        <b-tab title="Kelas1" class="p-4" >
                            <tableSiswa :kelas='x' :siswas='datas'></tableSiswa>
                        </b-tab>
                        <b-tab title="Kelas2" class="p-4" >
                            <tableSiswa :kelas='xi' :siswas='datas'></tableSiswa>
                        </b-tab>
                        <b-tab title="Kelas3" class="p-4" >
                          <tableSiswa :kelas='xii' :siswas='datas'></tableSiswa>
                        </b-tab>
                     </b-tabs>
                </div>
                <div v-if="content=='guru'">
                    <b-tabs tabs align="left">
                        <b-tab title="Semua Guru" active class="p-4">
                            <tableGuru :gurus='datas' @edit='edit'></tableGuru>
                        </b-tab>
                     </b-tabs>
                </div>
                <div v-if="content=='mapel'">                   
                        <tableMapel :mapels='datas' @edit='edit'></tableMapel>                                       
                </div>
                <div v-if="content=='kelas'">                   
                        <tableKelas :kelass='datas' @edit='edit'></tableKelas>                                       
                </div>
                {{dataEdit}}
            </b-card>
                <editSiswa :dataSiswa='dataEdit'></editSiswa>
               <editGuru :dataEdit='dataEdit'></editGuru> 
               <editKelas :dataKelas='dataEdit' :kelass='datas'></editKelas>
               <editMapel :dataMapel='dataEdit'></editMapel>
        </b-card-group>
    </b-container>               
</div>  
</template>


<script>
  const axios = require ('axios');
  import {apiUrl} from '../main'
  import editSiswa from './editSiswa.vue'
  import editGuru from './editGuru'
  import editMapel from './editMapel'
  import editKelas from './editKelas'
  import TambahSiswa from './TambahSiswa.vue'
  import tambahGuru from './TambahGuru'
  import tambahMapel from './TambahMapel'
  import tambahKelas from './TambahKelas'
  import tableSiswa from './tableSiswa'
  import tableKelas from './tableKelas'
  import tableGuru from './TabelGuru'
  import tableMapel from './TabelMapel'
  import { setInterval } from 'timers';
  import { Stream } from 'stream';
  export default {
    components:{
      TambahSiswa,
      tambahGuru,
      tambahMapel,
      tambahKelas,
      editSiswa,
      editGuru,
      editMapel,
      editKelas,
      tableGuru,
      tableMapel,
      tableSiswa,
      tableKelas,
    },
    data() {
      return {
        x :'X',
        xi :'XI',
        xii : 'XII',
        datas: null,
        dabar:null,
        dataEdit:{
            },
        content:this.$route.params.id
      }
    },

    methods: {
      edit(dataEdit){
        this.dataEdit=dataEdit
      }
    },
    computed: {

    },
    mounted() {
      // console.log(apiUrl()+this.content+'/')
     
      setInterval(()=>{
        if(this.content!==this.$route.params.id){
          this.content=this.$route.params.id
        }
        if(this.content) {
            axios
          .get(apiUrl()+this.content+'/')
          .then(Response => (this.dabar=Response.data.values))
          .catch(function (error) {
            // console.log(error);
          })
          .then(function () {
            // always executed
          }); 
          if (this.datas!==this.dabar){
          this.datas = this.dabar
          }   
        }        
      },500)
   
    },
  }
</script>

