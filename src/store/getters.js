export default{
  finishedCount(state){
    return state.todoList.reduce((total, todo)=> total+(todo.finished?1:0),0);
  },
}