<template>

  <main>
    <nav class="nav-wrapper blue darken-1">
      <div class="container">
      <div class="brand">
        <a href="#" class="brand-logo left">Automatic OS</a>
      </div>
      </div>
    </nav>

    <center>
      <div class="section"></div>

      <h5 class="blue-text">Por favor, faça login para acessar.</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

          <form @submit.prevent="attempLogin" class="col s12">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input v-model="login.email" class='validate' type='email' name='email' id='email' />
                <label for='email'>Informe seu e-mail</label>
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <input v-model="login.password" class='validate' type='password' name='password' id='password' />
                <label for='password'>Informe sua senha</label>
              </div>
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect blue darken-1'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>

    <div class="section"></div>
    <div class="section"></div>
</main>

</template>

<script>
import Api from '../../services/api'

export default {
      data(){
      return {
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      attempLogin(){
        Api.attempLogin('http://127.0.0.1:8000/api/auth/login?email='+this.login.email+'&password='+this.login.password)
        .then(resp =>{
              alert("Login realizado com Sucesso!")
              localStorage.setItem('user-token', resp.data.access_token)
              window.location.href = 'http://localhost:8080/home'
            })
            .catch( function(){
              alert("Usuário ou senha inválidos.")
            })
      }
    }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
  }
  nav{
    height: 67px !important;
  }
  .brand{
    margin: 0 auto;
    margin-left: 0;
  }
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #44a047;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #44a047;
      box-shadow: none;
    }
</style>