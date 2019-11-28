<template>
  <div class="footer">
    <label>
      <input type="checkbox" v-model="ischeck">
      <span>{{finishedCount}}已完成/{{$store.state.todoList.length}}总共</span>
    </label>
    <button @click="delFinished">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods:{
    delFinished(){
      this.$store.dispatch('delFinished');
    }
  },
  computed:{
    ...mapGetters(['finishedCount']),
    ischeck:{
      get(){
        if(this.$store.state.todoList.length === 0) return false;
        return this.finishedCount === this.$store.state.todoList.length;
      },
      set(ischeck){
        this.$store.dispatch('sellectAll', ischeck);
      }
    }
  }
}
</script>

<style scoped>
.footer{
  justify-content: space-between;
  display: flex;
}
span{
  margin-left: 20px;
}
</style>