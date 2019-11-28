<template>
  <div id="app">
    <todo-header/>
    <todo-list/>
    <hr>
    <todo-footer/>
  </div>
</template>

<script>
import todoHeader from './components/Header'
import todoFooter from './components/Footer';
import todoList from './components/List';

export default {
  name: 'App',
  components: {
    todoHeader,
    todoFooter,
    todoList
  },
  methods:{
    // addTodo(todo){
    //   this.todoList.unshift(todo);
    // },
    // delTodo(index){
    //   this.todoList.splice(index, 1);
    // },
    // delAll(){
    //   var arr = [];
    //   this.todoList.forEach((item,index)=>{
    //     if(item.finished){
    //       arr.unshift(index);
    //     }
    //   });
    //   arr.forEach(item=>{
    //     this.todoList.splice(item,1);
    //   })
    // },
    // switchTodo(index){
    //   this.todoList[index].finished = !this.todoList[index].finished;
    //   console.log(this.todoList[index].title,this.todoList[index].finished);
    // },
    // sellectAll(flag){
    //   this.todoList.forEach(item => item.finished = flag);
    // }
  }
}
</script>

<style>
#app{
  width:400px;
  margin: 0 auto;
}
</style>
