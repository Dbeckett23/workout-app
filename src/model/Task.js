class Task {
  constructor(type, name, time) {
    this._type = type;
    this._name = name;
    this._time = time;
  }

  get type() {
    return this._type;
  }

  get name() {
    return this._name;
  }

  // get the time in seconds
  get time() {
    return this._time;
  }

}

export default Task