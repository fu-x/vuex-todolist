<template>
  <div class="header">
    <input v-model="title" type="text" placeholder="请输入待办任务，按回车确认" @keyup.enter="addItem(title)">
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:''
    }
  },
  methods:{
    addItem(title){
      var todo = {title:title,finished:false};
      // this.addTodo(todo);
      this.$store.dispatch('addTodo',todo);
      this.title = '';
    }
  },
}
</script>

<style scoped>
input{
  width: 400px;
  height: 25px;
  margin: 20px auto;
}
</style>