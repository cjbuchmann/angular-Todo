app.controller('todoCtrl', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.todos = [];
    $scope.newTodo = new Todo();

    console.log('newTodo is', $scope.newTodo);

    $scope.createTodo = function(){
      console.log('creating new todo!', $scope.newTodo);
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = new Todo();
    }
}]);
