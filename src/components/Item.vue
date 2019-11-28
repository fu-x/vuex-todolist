<template>
  <div class="item">
    <li @mouseenter="dealShow(true)" @mouseleave="dealShow(false)" :style="{backgroundColor:backgroundColor}">
      <label>
        <input type="checkbox" v-model="item.finished">
        {{item.title}}
      </label>
      <button v-show="isShow" @click="delItem(index)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  data(){
    return{
      backgroundColor:'#fff',
      isShow:false,
    }
  },
  methods:{
    dealShow(flag){
      this.isShow = flag;
      this.backgroundColor = flag ? '#ddd' : '#fff';
    },
    delItem(index){
      if(window.confirm(`确定删除${this.title}事件吗？`)){
        this.$store.dispatch('delTodo', index);
      }
    }
  },
  props:['item','index']
}
</script>

<style scoped>
li{
  margin-top: 5px;
  width: 400px;
  justify-content: space-between;
  display: flex;
  line-height: 25px;
}

</style>