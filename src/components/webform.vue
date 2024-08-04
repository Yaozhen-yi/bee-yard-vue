<script setup>
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, numeric } from '@vuelidate/validators';
import { useRouter } from 'vue-router';



const name = ref('');
const phone = ref('');
const address = ref('');
const emailField = ref('');

const rules = {
  name: { required },
  phone: { required, numeric },
  address: { required },
  emailField: { required, email }
};

const $v = useVuelidate(rules, { name, phone, address, emailField });
// /* 跳轉路由*/
const router = useRouter();

const submit = () => {
  $v.value.$touch();
  if ($v.value.$invalid) {
    alert('表单有错误，请检查输入内容。');
    return;
  }

  const data = {
    name:name.value,
    phone: phone.value,
    address: address.value,
    emailField: emailField.value,
  };

  console.log("輸入的數據是:",data)

  /*將data數據儲存到sessionStorage,在formDisplay中顯示 */
  sessionStorage.setItem('peopleData', JSON.stringify(data));
  //跳轉到formDisplay頁面
  router.push('/formDisplay');
  alert('表单提交成功！');
};

  

</script>

<template>
  <div class="form">
    <h3 class="title">訂購人資訊</h3>
    <form id="dataForm"  @submit.prevent="submit"  method="post">
      <div>
        <label for="name">姓名:</label>
        <input id="name" v-model="name" type="text">
        <span v-if="!$v.name.required && $v.name.$error">姓名必须填写</span>
      </div>
      <div>
        <label for="phone">电话:</label>
        <input id="phone" v-model="phone" type="text">
        <span v-if="!$v.phone.required && $v.phone.$error">请输入电话号码</span>
        <span v-if="!$v.phone.numeric && $v.phone.$error">电话号码必须是数字</span>
      </div>
      <div>
        <label for="address">地址:</label>
        <input id="address" v-model="address" type="text">
        <span v-if="!$v.address.required && $v.address.$error">请输入地址</span>
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input id="email" v-model="emailField" type="email">
        <span v-if="!$v.emailField.required && $v.emailField.$error">邮箱必须填写</span>
        <span v-if="!$v.emailField.email && $v.emailField.$error">不是一个有效的 e-mail 地址</span>
      </div>
      <button type="submit" class="btn">下一步</button>
   </form>
  </div>
   
</template>

<style>
.form{
    text-align: center;
    font-size: 1.5rem;
}
.form .title{
  font-size: 2rem;
  font-weight: 700;
}
.form label{
    margin-right: 1rem;
}
.form input{
    border: 2px solid black;
    margin: 1rem 0;
}
.btn{
  border: 2px solid black;
  width: 200px;
  height: 100px;
  margin-top: 0;
}
</style>
