"use strict";

app.factory('Todo', function(){
  class Todo {
    constructor(description){
      this.description = description;
      this.done = false;
    }
  }

  return Todo;
})
