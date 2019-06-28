<template>
    <div>
        <div v-if='gurus==null' class="text-center my-2 m-5 p-5">
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
        :items="gurus"
                                
        >
            <template slot="nomor" slot-scope="row">
                <div width="4px">
                    {{row.index+1}}   
                </div>
            </template>

            <template slot="imgGuru" slot-scope="row">
                <div> 
                    <img :src="row.value" alt="" srcset="" style="width:60%; margin:0px; padding:0px ">
                </div>
            </template>
            <template slot="action" slot-scope="row">
                <div class="text-center" @mouseover="index=row.index+1"> 
                    <b-button v-b-modal.modal-edit-guru variant="success" @click="edit">Edit</b-button>
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
        gurus : Array,
    },
    data() {
      return {
        sortBy:"nip",
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
          {key : 'nip', label:'NIP', sortable:true},
          {key : 'nama', label:'Nama', sortable:true},
          {key : 'alamat', label:'Alamat'},
          {key : 'tglMasuk', label:'Tanggal Masuk'},
          {key : 'tglKeluar', label: 'Tanggal Keluar',style:['width:10px;'] }, 
          {key : 'imgGuru', label : 'Foto', class:['width-img']},
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
            }return this.gurus
    }
    },
    methods: {
        edit(){
            if(this.index){
                let dataEdit = {
                id : this.gurus[this.index-1].nip,
                nama : this.gurus[this.index-1].nama,
                alamat : this.gurus[this.index-1].alamat,                
                imgGuru: this.gurus[this.index-1].imgGuru,
            }
            this.$emit('edit',dataEdit)
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