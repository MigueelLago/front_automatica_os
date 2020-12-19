<template>
  <div>

    <nav class="nav-wrapper blue darken-1">
      <div class="container">
      <div class="brand">
        <a href="#" class="brand-logo left">Automatic OS</a>
      </div>
      <div class="actions">
        <button class="waves-effect btn-small green darken-1" @click="createOrder()">Criar nova O.S</button>
        <button class="waves-effect btn-small red darken-1" @click="logout()">Sair</button>
      </div>
      </div>
    </nav>


      <table class="centered">
        <thead>

          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Produto</th>
            <th>Previsão de entrega</th>
            <th>Status Atual</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>
          <tr v-for="services of ordersServices" :key="services.id">

            <td>{{ services.id }}</td>
            <td>{{ services.client_name }}</td>
            <td>{{ services.phone }}</td>
            <td>{{ services.product }}</td>
            <td>{{ services.birth }}</td>
            <td>Em andamento</td>
            <td>
             
              <button class="waves-effect btn-small blue darken-1" @click="openModal(services.id); disabled()">Ver</button>
              <button class="waves-effect btn-small red darken-1" @click="deleteId(services.id)">Deletar</button>
            </td>

          </tr>

        </tbody>
      
      </table>
      


        <div class="container">
            <vc-pagination :source="pagination" @navigate="navigate"></vc-pagination>
        </div>


      <create-modal v-if="showModal"  :showModal=showModal @clicked="onChildClick">

      </create-modal>

      <modal-services v-if="showModalService" :infoServices=infoServices :showModalService=showModalService @clicked="closeModal">

      </modal-services>

  </div>

</template>

<script>
import Api from '../../services/api'
import VcPagination from '../../components/Pagination'
import CreateModal from '../../components/ModalInsert'
import ModalServices from '../../components/ModalServices'

export default{
  name: 'App',

  components:{
    VcPagination,
    CreateModal,
    ModalServices
  },
  
  data(){
    return {
      ordersServices: [],
      pagination: {},
      showModal: false,
      showModalService: false,
      dataServices: [],
      infoServices: []
    }
  },

  methods: {
    deleteId(id){
      Api.deleteService('http://127.0.0.1:8000/api/services/'+id).then(
        alert('Orderm de Serviço deletada com Sucesso!')
      )
      Api.index().then(req => {
        this.ordersServices = req.data.data
        this.pagination = req.data
      })
    },

    createOrder(){
      this.showModal = true;
    },

    disabled(){
      function disableInputs(){
        const inputs = document.getElementsByClassName('validate');
        for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = true;
        } 
      }
      setTimeout(disableInputs, 1500)
    },

    openModal(id){
      Api.getId('http://127.0.0.1:8000/api/services/'+id).then( req =>{
        this.showModalService = true
        this.infoServices = req.data.data
      })
    },

    closeModal(){
      this.showModalService = false
    },

    onChildClick () {
      this.showModal = false;
    },

    navigate (page) {
      Api.paginate('http://127.0.0.1:8000/api/services?page='+page).then( resp => {
        this.ordersServices = resp.data.data
        this.pagination = resp.data
      })
    },

    logout(){
      localStorage.removeItem('user-token')
      window.location.href = 'http://localhost:8080/'
    }
  },

  mounted(){
    Api.index().then(req => {
      this.ordersServices = req.data.data
      this.pagination = req.data
    })
  }

}
</script>

<style>
  .container{
    display: flex;
    justify-content: center;
  }
  nav{
    height: auto !important;
  }
  .brand{
    margin: 0 auto;
    margin-left: 0;
  }
  .brand, .actions{
    margin-bottom: 2%;
  }
  .actions button{
    margin-left: 20px !important;
  }
</style>
