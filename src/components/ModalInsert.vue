<template>

  <!-- Modal Structure -->
      <div id="modalCreate" class="modalCreate" v-if="showModal">
        <div class="modal-content">
        <div slot="title">
            <div class="col s6"><h5>Dados do Cliente</h5></div>
        </div>

        <div slot="create">

          <form @submit.prevent="createOrder" class="col s12">
            <div class="row">
              <div class="input-field col s3">
                <input v-model="service.client_name" id="clientName" type="text" class="validate">
                <label class="active" for="clientName">Nome do cliente</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.phone" id="clientPhone" type="text" class="validate">
                <label class="active" for="clientPhone">Telefone</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.cpf" id="clientCpf" type="text" class="validate">
                <label class="active" for="clientCpf">CPF</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.cnpj" id="clientCnpj" type="text" class="validate">
                <label class="active" for="clientCnpj">CNPJ</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s3">
                <input v-model="service.street" id="clientStreet" type="text" class="validate">
                <label class="active" for="clientStreet">Endereço</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.neighborhood" id="clientNeighborhood" type="text" class="validate">
                <label class="active" for="clientNeighborhood">Bairro</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.city" id="clientCity" type="text" class="validate">
                <label class="active" for="clientCity">Cidade</label>
              </div>

              <div class="input-field col s3">
                <input v-model="service.state" id="clientState" type="text" class="validate">
                <label class="active" for="clientState">Estado</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s4">
                <input v-model="service.gender" id="clientGender" type="text" class="validate">
                <label class="active" for="clientGender">Gênero</label>
              </div>
              <div class="input-field col s4">
                <input v-model="service.birth" id="delivery" type="text" class="validate">
                <label class="active" for="delivery">Data de nascimento</label>
              </div>
            </div>

             <h5>Dados do Serviço</h5>

            <div class="row">
              <div class="input-field col s3">
              <input v-model="service.product" id="product" type="text" class="validate">
              <label class="active" for="product">Serviço</label>
              </div>
            </div>

             <div class="row">
              <div class="input-field col s12">
              <input v-model="service.description" id="description" type="text" class="validate">
              <label class="active" for="description">Descrição</label>
              </div>
            </div>
            
            <div class="row">
              <div class="input-field col s12">
              <input v-model="service.ps" id="ps" type="text" class="validate">
              <label class="active" for="ps">Observação</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s4">
              <input v-model="service.delivery" id="delivery" type="text" class="validate">
              <label class="active" for="delivery">Previsão de entrega</label>
              </div>
            </div>

            <div class="modal-footer">
              <div class="row">
                  <div class="col s6">
                      <button  class="waves-effect btn-small red darken-1 btnFooter" @click="closeModal">Fechar</button>
                  </div>

              <div class="col s6">
                      <button class="waves-effect btn-small green darken-1 btnFooter saved">Criar O.S</button>
              </div>
              </div>

              
            </div>

          </form>

        </div>
        </div>
            
      </div>

</template>
<script>
import Api from '../services/api'

  export default {
    name: 'app-modal-create',
    props: {
        showModal: Boolean,
    },
    data(){
      return {
        service: {
          client_name: '',
          cpf: '',
          cnpj: '',
          phone: '',
          street: '',
          neighborhood: '',
          city: '',
          state: '',
          gender: '',
          birth: '',
          product: '',
          ps: '',
          description: '',
          delivery: ''
        },
      }
    },
    methods: {
        closeModal() {
            this.$emit('clicked');
        },
        createOrder(){
            Api.createOrder(this.service).then( function(){
              alert("Ordem de serviço criada com Sucesso!")
              window.location.href = 'http://localhost:8080/home'
            })
            .catch( function(){
              alert("Erro ao criar ordem de serviço! Verifique se as informações estão preenchidas.")
            })
        }
    }
  };
</script>

<style>
    #modalCreate {
      z-index: 9999999999;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 900px;
      max-width: 100%;
      height: 500px;
      max-height: 100%;
      background: #FFFFFF;
      box-shadow: 2px 2px 20px 1px;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
    }
    .modal-footer .btnFooter{
      display: flex;
      margin: 0 auto !important;
      margin-right: 0 !important;
    }
    .modal-footer .saved{
      margin-left: 0 !important;
    }
</style>