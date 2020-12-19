<template>

  <!-- Modal Structure -->
      <div id="modalService" class="modalService" v-if="showModalService">
        <div class="modal-content">
        <div id="nav-title">

          <div class="row">
            <div class="col s4">
              <h5>Dados do Cliente</h5>
            </div>

            <div class="col s4 edit">
              <button class="waves-effect btn-small green darken-1 btnFooter" @click="enableEdit">Editar</button>
            </div>
          </div>

        </div>


          <form class="col s12">
            <div class="row">

              <div class="input-field col s3">
                <input v-model="infoServices.id" id="clientId" type="text" disabled>
                <label class="active" for="clientId">ID</label>
              </div>

              <div class="input-field col s3">
                <input v-model="infoServices.client_name" id="clientName" type="text" class="validate">
                <label class="active" for="clientName">Nome</label>
              </div>

              <div class="input-field col s3">
                <input v-model="infoServices.phone" id="clientPhone" type="text" class="validate">
                <label class="active" for="clientPhone">Telefone</label>
              </div>

              <div class="input-field col s3">
                <input v-model="infoServices.cpf" id="clientCpf" type="text" class="validate">
                <label class="active" for="clientCpf">CPF</label>
              </div>
            </div>

            <div class="row">

              <div class="input-field col s3">
                <input v-model="infoServices.cnpj" id="clientCnpj" type="text" class="validate">
                <label class="active" for="clientCnpj">CNPJ</label>
              </div>

              <div class="input-field col s3">
                <input v-model="infoServices.strret" id="clientStreet" type="text" class="validate">
                <label class="active" for="clientStreet">Endereço</label>
              </div>

              <div class="input-field col s3">
                <input v-model="infoServices.neighborhood" id="clientNeighborhood" type="text" class="validate">
                <label class="active" for="clientNeighborhood">Bairro</label>
              </div>

              <div class="input-field col s2">
                <input v-model="infoServices.city" id="clientCity" type="text" class="validate">
                <label class="active" for="clientCity">Cidade</label>
              </div>

              <div class="input-field col s2">
                <input v-model="infoServices.state" id="clientState" type="text" class="validate">
                <label class="active" for="clientState">Estado</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s4">
                <input v-model="infoServices.gender" id="clientGender" type="text" class="validate">
                <label class="active" for="clientGender">Gênero</label>
              </div>
              <div class="input-field col s4">
                <input v-model="infoServices.birth" id="birth" type="text" class="validate">
                <label class="active" for="birth">Data de nascimento</label>
              </div>
            </div>

             <h5>Dados do Serviço</h5>

            <div class="row">
              <div class="input-field col s3">
              <input v-model="infoServices.product" id="product" type="text" class="validate">
              <label class="active" for="product">Serviço</label>
              </div>
            </div>

             <div class="row">
              <div class="input-field col s12">
              <input v-model="infoServices.description" id="description" type="text" class="validate">
              <label class="active" for="description">Descrição</label>
              </div>
            </div>
            
            <div class="row">
              <div class="input-field col s12">
              <input v-model="infoServices.ps" id="ps" type="text" class="validate">
              <label class="active" for="ps">Observação</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s4">
              <input v-model="infoServices.delivery" id="delivery" type="text" class="validate">
              <label class="active" for="delivery">Previsão de entrega</label>
              </div>
            </div>
          </form>
          <div class="modal-footer">
            <div slot="btnClose">
              <div class="row">
                <div class="col s4 btnFooterExit">
                  <button class="waves-effect btn-small red darken-1" @click="closeModal()">Sair</button>
                </div>
              
                <div class="col s4 btnFooterSave">
                  <button class="waves-effect btn-small green darken-1" @click="saveEdit(infoServices.id)">Salvar</button>
                </div>

              </div>
              
            </div>
          </div>
        </div>
            
      </div>

</template>

<script>
import Api from '../services/api'

  export default {
    name: 'app-modal-service',
    props: {
        showModalService: Boolean,
        infoServices: {}
    },
    methods: {
        closeModal() {
            this.$emit('clicked');
        },
        enableEdit(){
            const inputs = document.getElementsByClassName('validate');
            for (var i = 0; i < inputs.length; i++) { 
            inputs[i].disabled = false;
          }
        },
        saveEdit(id){
          Api.editOrder('http://127.0.0.1:8000/api/services/'+id, this.infoServices).then(
              alert("Ordem de serviço alterada com sucesso!")
          )
        }
    }
  };
</script>

<style>
    #modalService {
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
    #nav-title h5{
      margin-left: 3%;
    }
    #nav-title .edit{
      margin-top: 2%;
      display: flex;
      justify-content: flex-end;
      margin-right: 2%;
    }
    .modal-footer .btnFooterExit{
      display: flex;
      justify-content: flex-end;
    }
    .modal-footer .btnFooterSave{
      display: flex;
      justify-content: flex-start;
    }
</style>