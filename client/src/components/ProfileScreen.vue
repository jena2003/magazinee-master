<template>
  <div class="profile">
    <div class="menu">
      <div class="menu__item">
        Личные данные
      </div>
      <div class="menu__item">
        Мои статьи
      </div>
    </div>
    <div class="user">
      <img class="user__avatar" src="../assets/img/author.png" />
      <div>
        <input v-bind:value="name" @input="name = $event.target.value" type="text" class="user__fio" placeholder="Имя"/>
        <input v-bind:value="sername" @input="sername = $event.target.value" class="user__fio" placeholder="Фамилия"/>
        <input v-bind:value="patronymic" @input="patronymic = $event.target.value" class="user__fio" placeholder="Отчество"/>
        <input v-bind:value="city" @input="city = $event.target.value" class="user__fio" placeholder="Город"/>
        <input v-bind:value="adress" @input="adress = $event.target.value" class="user__fio" placeholder="Адрес"/>
        <input v-bind:value="posteCode" @input="posteCode = $event.target.value" class="user__fio" placeholder="Почтовый индекс"/>
      </div>
    </div>
    <div class="hyi">
        <div class="user__data">
      <input class="user__fio" placeholder="email"/>
      <input class="user__fio" placeholder="password"/>
    </div>
    <div class="user__education">
      <span class="hyi__title">Образование</span>
       <input v-bind:value="education" @input="education = $event.target.value" class="user__fio" placeholder="Наименование учреждения" />
       <input v-bind:value="specialtyCode" @input="specialtyCode = $event.target.value" class="user__fio" placeholder="Код чего-то"/>
    </div>
    <div class="user__work">
      <span class="hyi__title">Работа</span>
       <input v-bind:value="work" @input="work = $event.target.value" class="user__fio" placeholder="Место работы" />
       <input v-bind:value="position" @input="position = $event.target.value" class="user__fio" placeholder="Должность"/>
       <input v-bind:value="academicDegree" @input="academicDegree = $event.target.value" class="user__fio" placeholder="Ученая степень"/>
    </div>
    <button @click="save" class="sign-up__button">Сохранить</button>
    </div> 
  </div>
  
</template>

<script>
//import {addAuthor} from "@/api/authorAPI"
//import {getUser} from "@/api/userAPI"
export default {
  name: 'ProfileScreen',
}
</script>

<style lang="less" scoped>
@import '../utils/const.less';
.hyi {
  position: absolute;
  top: 60%;
  left: 40%;
  &__title {
    margin-left: 70px;
  }
}
.user {
  position: absolute;
  left: 400px;
  top: 100px;
  display: flex;
  &__avatar {
    width: 200px;
    height: 200px;
  }
  &__fio {
    display: flex;
    flex-direction: column;
    width: 200px;
    text-align: center;
    margin: 16px;
    border: none;
    outline: none;
    background-color: @utility-border-input;
    height: 25px;
    padding: 8px;
    border-radius: 8px;
  }
}
.menu {
  width: 200px;
  background-color: rgba(1, 68, 97);
  position: absolute;
  left: 0;
  top: 40%;
  display: flex;
  flex-direction: column;
  &__item {
    color: white;
    padding: 12px;
    border: 1px solid black;
  }
}
</style>