"use strict";

app.controller('todoCtrl', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.todos = [];
    $scope.newTodo = new Todo();

    $scope.createTodo = function(){
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = new Todo();
    };

    $scope.notCompleted = function(){
      let filtered = $scope.todos.filter(function(todo){
        return todo.done === false;
      });

      return filtered || [];
    };

    $scope.removeCompleted = function(){
      let notCompleted = $scope.notCompleted();
      $scope.todos = notCompleted;
    }
}]);
