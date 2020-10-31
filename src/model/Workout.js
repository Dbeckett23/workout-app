import Task from './Task';

class Workout {
  constructor(jsonObj) {
    this._name = jsonObj['name'];
    this._tasks = new Array();
    this.loadTasks(jsonObj['tasks']);
  }

  loadTasks(tasks) {
    tasks.forEach(task => {
      var taskObj;
      
      if ('break' === task.type) {
        taskObj = new Task(task.type, 'break', task.time);
      } else {
        taskObj = new Task(task.type, task.name, task.time);
      }

      this._tasks.push(taskObj);
    });
  }
}

export default Workout