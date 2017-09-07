angular.module('app', [])
  .component('todoList', {
    controller: function() {
      this.todos = [];
      this.addTodo = () => {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    template: `
    <h1>Todo List</h1>
    <input ng-model="$ctrl.newTodo">
    <button ng-click="$ctrl.addTodo()">add</button>
    <ul>
      <li ng-repeat="todo in $ctrl.todos">
        {{todo}}
      </li>
    </ul>
    <hr/>
    <pre>{{$ctrl.todos}}<pre>
    `
  })
