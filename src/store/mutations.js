import {
  ADD_TODO,
  DEL_TODO,
  DEL_FINISHED,
  SELLECT_ALL
} from './modules'

export default{
  [ADD_TODO](state, {todo}){
    state.todoList.unshift(todo);
  },
  [DEL_TODO](state, {index}){
    state.todoList.splice(index, 1);
  },
  [DEL_FINISHED](state){
    var arr = [];
    state.todoList.forEach((item, index) => {
      if (item.finished) {
        arr.unshift(index);
      }
    });
    arr.forEach(item => {
      state.todoList.splice(item, 1);
    })
  },
  [SELLECT_ALL](state,{flag}){
    state.todoList.forEach(item => item.finished = flag);
  }
}