<script setup>
import { useVuelidate } from '@vuelidate/core' ;
import { email, required } from '@vuelidate/validators'
import { reactive, computed } from "vue";

const state = reactive({
    name:"",
    phone: "",
    address: "",
    email: "",
});
const rules = {
  name: { required },
  phone: { required },
  address: { required },
  email: { required, email: true }
};
// 使用Vuelidate函式，傳入規則以及響應式資料
const v$ = useVuelidate(rules, state)

/*增加error-message屬性,可以即時告知用戶哪裡有錯 */
/*$errors是陣列會顯示錯誤,把$message提取出來顯示到畫面上*/
const nameErrorMsg = computed(() => {
  let errors = [];
  v$.value.name.$errors.forEach((error) => {
    errors.push(error.$message);
  });
});
const phoneErrorMsg = computed(() => {
  let errors = [];
  v$.value.phone.$errors.forEach((error) => {
    errors.push(error.$message);
  });
});
const addressErrorMsg = computed(() => {
  let errors = [];
  v$.value.address.$errors.forEach((error) => {
    errors.push(error.$message);
  });
});
const emailErrorMsg = computed(() => {
  let errors = [];
  v$.value.email.$errors.forEach((error) => {
    errors.push(error.$message);
  });
});

const submitForm = () =>{
  // TODO: 驗證
  v$.value.$validate();
  
  console.log(v$.value);
  if (!v$.value.$error) {
    alert("送出成功");
  } else {
    alert("失敗");
}
console.log('提交的数据:', state);
};

</script>

<template>
  <form>
    <h3>訂購人資料</h3>
    <v-sheet>
      <b>姓名</b>
        <v-text-field  v-model="state.name" :counter="10" :error-messages="nameErrorMsg" label="Name" required @blur="v$.name.$touch" @input="v$.name.$touch"></v-text-field>
        <b>電話</b>
        <v-text-field v-model="state.phone" :counter="10" :error-messages="phoneErrorMsg" label="Phone" required @blur="v$.phone.$touch" @input="v$.phone.$touch" ></v-text-field>
        <b>收貨地址</b>
        <v-text-field v-model="state.address" :counter="25" :error-messages="addressErrorMsg" label="Address" required @blur="v$.address.$touch" @input="v$.address.$touch" ></v-text-field>
        <b>電子信箱</b>
        <v-text-field v-model="state.email" :counter="15" :error-messages="emailErrorMsg" label="E-mail" required @blur="v$.email.$touch" @input="v$.email.$touch" ></v-text-field>
        <router-link to="/formDisplay">
          <v-btn class="me-4" @click="submitForm"> submit</v-btn></router-link>
</v-sheet>
  </form>
</template>

<style>

h3{
    font-size: 50px;
    font-weight: 700;
}
b{
    font-size: 30px;
} 
.v-text-field{
    /* margin-top: -70px; */
    height: 110px;
    /* margin-bottom: 70px; */
    margin: -50px 0 70px 0;
}
</style>
