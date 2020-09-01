<template>
  <div id="login">
    <div id="wrapper">
  <b-button v-b-toggle.collapse-1 class="btn-box">LOG IN</b-button>
  </div>
  <b-collapse id="collapse-1" class="mt-2">
      <template>
        <div class="box">
          <h2>LOG IN</h2>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="ID"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.userid"
                type="text"
                required
                placeholder="아이디를 입력해 주세요."
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password" label-for="input-2">
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                required
                placeholder="비밀번호를 입력해 주세요."
              ></b-form-input>
            </b-form-group>
            <p>아직 회원이 아니신가요?</p>
            <b-button type="submit" class="login-btn">LOG IN</b-button>
            <b-button v-b-toggle.collapse-1 type="reset" variant="login-cancel" class="cancel">CANCEL</b-button>
          </b-form>
        </div>
      </template>
  </b-collapse>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userid: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.userid = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style>
  .btn-box{
      color: #2B90D9 !important;
      background-color: #ffffff !important;
      box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%) !important;
      border: none !important;
      border-radius: 50px !important;
      width: 100px !important;
  }
  .box {
      background-color: #ffffff !important;
      box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%) !important;
      border: none !important;
      border-radius: 30px !important;
      padding: 50px;
      width: 340px;
  }

  h2{
    text-align: center;
    margin-bottom: 30px !important;
    color: #2B90D9 !important;
  }

  label{
    color: #797C88 !important;
  }
  .form-control{
    background: #F3F3F3 !important;
    padding: 1.5rem 0.75rem !important;
    border: none !important;
    border-radius: 0.5rem !important;
    margin-bottom: 22px !important;
  }
  input::placeholder{
    color: #BCBCBC !important;
  }
  input:focus{
    color: #495057;
    background-color: #fff !important;
    border: 1px solid #c2c2c2 !important;
    outline: 0;
    box-shadow: inset 0 0 3px 0 rgb(0 0 0 / 25%) !important;
  }
  .login-btn, .cancel{
    display: block !important;
    width: 100%;
    padding: 0.65rem 0.75rem !important;
    font-size: 1.1rem !important;
  }
   .login-btn{
     margin-bottom: 10px;
   }
   .cancel{
     border: solid 1px #2B90D9 !important;
     color: #2999FA !important;
   }
   p{
     margin-top: 30px !important;
     margin-bottom: 5px !important;
     font-size: .8rem;
   }
</style>
