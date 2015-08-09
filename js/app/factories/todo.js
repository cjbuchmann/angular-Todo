"use strict";

app.factory('Todo', function(){
  class Todo {
    constructor(description){
      this.description = description;
      this.done = false;
    }

    doneClass(){
      if(this.done){
        return 'todo-done';
      }
      return 'todo-not-done';
    }
  }

  return Todo;
})
