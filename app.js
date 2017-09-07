angular.module('app', [])
  .component('todoList', {
    controller: function() {
      this.addTodo = () => {
        console.log(this.newTodo);
      }
    },
    template: `
    <h1>Todo List</h1>
    <input ng-model = "$ctrl.newTodo">
    <button ng-click = "$ctrl.addTodo()">add</button>
    <ul>
      <li></li>
    </ul>
    <hr/>
    <pre>{{$ctrl.newTodo}}<pre>
    `
  })
