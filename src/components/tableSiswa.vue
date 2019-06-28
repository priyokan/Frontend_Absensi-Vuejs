<template>
    <div>
        <div v-if='siswas==null' class="text-center my-2 m-5 p-5">
            <b-spinner class="align-middle" type='grow'></b-spinner>
            <strong>Loading...</strong>
        </div> 
        <b-table 
        v-else 
        striped
        reaponsive
        hover
        :fields="column"
        :sort-by.sync='sortBy'
        :sort-desc.sync='sortDesc'
        :items="KelasFilter"
                                
        >
            <template slot="nomor" slot-scope="row">
                <div width="4px">
                    {{row.index+1}}   
                </div>
            </template>

            <template slot="imgSiswa" slot-scope="row">
                <div> 
                    <img :src="row.value" alt="" srcset="" style="width:60%; margin:0px; padding:0px ">
                </div>
            </template>
            <template slot="action" slot-scope="row">
                <div class="text-center" @mouseover="index=row.index+1"> 
                    <b-button v-b-modal.modal-edit-siswa variant="success" @click="edit">Edit</b-button>
                </div>
            </template>
        </b-table>

    </div>
</template>

<script>

const axios = require ('axios');
export default {
    component:{
    },
    props:{
        kelas : String,
        siswas : Array,
    },
    data() {
      return {
        sortBy:"nis",
        sortDesc: false,
        sortDirection :'asc',
        ai: null,
        filters:{
            kelas:this.kelas,
        },
        index:Number,
        nis:'1223',
        column:[
          {key : 'nomor', label : '#'},
          {key : 'nis', label:'NIS', sortable:true},
          {key : 'nama', label:'Nama', sortable:true},
          {key : 'alamat', label:'Alamat'},
          {key : 'kelas', label:'Kelas'},
          {key : 'tglMasuk', label:'Tanggal Masuk'},
          {key : 'tglKeluar', label: 'Tanggal Keluar',style:['width:10px;'] }, 
          {key : 'imgSiswa', label : 'Foto', class:['width-img']},
          {key : 'action' , label: 'Action', class:['text-center']}
        ],
      }
    },
    computed: {
        KelasFilter () {
            if(this.kelas){
                const filtered = this.siswas.filter(item => {
                return Object.keys(this.filters).every(key =>
                        String(item[key])==(this.filters[key]))
                })
                return filtered.length > 0 ? filtered : [{
                    kelas: '',
                }]
            }return this.siswas
    }
    },
    methods: {
        edit(){
            if(this.index){
                let dataSiswa = {
                id : this.siswas[this.index-1].nis,
                nama : this.siswas[this.index-1].nama,
                alamat : this.siswas[this.index-1].alamat,
                kelas : this.siswas[this.index-1].kelas,
                
                imgSiswa: this.siswas[this.index-1].imgSiswa,
            }
            this.$emit('edit',dataSiswa)
            }
        }     
    },
    mounted(){
    },
}
</script>
<style>
  .width-img{
    width: 100px;
    height: 0px;
    padding: 0px;
    margin: 0px;
  }
</style>