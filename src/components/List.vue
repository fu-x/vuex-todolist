<template>
  <div class="list">
    <ul>
      <todo-item 
      v-for="(item, index) in $store.state.todoList" 
      :key="index" 
      :index="index" 
      :item="item">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import todoItem from './Item';
export default {
  components:{todoItem},
}
</script>

<style scoped>
ul{
  list-style: none;
  padding: 0;
  margin: 5px 0;
}
</style>