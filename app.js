angular.module('app', [])
  .component('todoList', {
    controller: function() {
      this.todos = [
        "Wake up",
        "Order falafel",
        "Eat falafel"
      ];
      this.addTodo = () => {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      };
      this.removeTodo = () => {
        this.todos.pop();
      }
    },
    template: `
    <h1>Todo List</h1>
    <input ng-model="$ctrl.newTodo">
    <button ng-click="$ctrl.addTodo()">add</button>
    <ul>
      <li
        ng-repeat="todo in $ctrl.todos track by $index"
        ng-click="$ctrl.removeTodo()"
      >
        {{todo}}
      </li>
    </ul>
    <hr/>
    <pre>{{$ctrl.todos | json}}<pre>
    `
  })
