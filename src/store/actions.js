import {
  ADD_TODO,
  DEL_TODO,
  DEL_FINISHED,
  SELLECT_ALL
} from './modules'

export default{
  addTodo({commit}, todo){
    commit(ADD_TODO, {todo});
  },
  delTodo({commit}, index){
    commit(DEL_TODO, {index});
  },
  delFinished({commit}){
    commit(DEL_FINISHED);
  },
  sellectAll({commit}, flag){
    commit(SELLECT_ALL, {flag});
  }
}