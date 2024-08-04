<script setup>
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, numeric, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';


const name = ref('');
const phone = ref('');
const address = ref('');
const emailField = ref('');
//綁定驗證規則
const rules = {
  name: {
    required: helpers.withMessage('姓名必須填寫', required)
  },
  phone: {
    required: helpers.withMessage('電話必須填寫', required),
    numeric: helpers.withMessage('電話號碼必須是數字', numeric)
  },
  address: {
    required: helpers.withMessage('地址必須填寫', required)
  },
  emailField: {
    required: helpers.withMessage('email必須填寫', required),
    email: helpers.withMessage('不是一個有效的 e-mail 地址', email)
  }
};
//使用Vuelidate進行驗證
const $v = useVuelidate(rules, { name, phone, address, emailField });

// /* 跳轉路由*/
const router = useRouter();

const submit = () => {
  //觸發驗證
  $v.value.$touch();
  //如果表單有錯誤,alert提示並返回
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
    <form id="dataForm" @submit.prevent="submit" method="post">
      <div>
        <label for="name">姓名:</label>
        <input id="name" v-model="$v.name.$model" type="text">
        <!--如果驗證錯誤,顯示錯誤訊息-->
        <span v-show="$v.name.$error">
          <span v-for="(error, index) in $v.name.$errors" :key="index">{{ error.$message }}</span>
        </span>
      </div>
      <div>
        <label for="phone">電話:</label>
        <input id="phone" v-model="$v.phone.$model" type="text">
        <span v-show="$v.phone.$error">
          <span v-for="(error, index) in $v.phone.$errors" :key="index">{{ error.$message }}</span>
        </span>
      </div>
      <div>
        <label for="address">地址:</label>
        <input id="address" v-model="$v.address.$model" type="text">
        <span v-show="$v.address.$error">
          <span v-for="(error, index) in $v.address.$errors" :key="index">{{ error.$message }}</span>
        </span>
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input id="email" v-model="$v.emailField.$model" type="email">
        <span v-show="$v.emailField.$error">
          <span v-for="(error, index) in $v.emailField.$errors" :key="index">{{ error.$message }}</span>
        </span>
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
.form span {
  width: 100%;
  color: red;
  display: block;
  margin: 0 auto;
}
.btn{
  border: 2px solid black;
  width: 200px;
  height: 100px;
  margin-top: 0;
}
</style>
