/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Workout from './model/Workout';
import * as workoutsJson from './data/workout.json';

// Screens
import WorkoutsScreen from './screens/WorkoutsScreen';

class WorkoutApp extends Component {
  constructor() {
    super();
    this._workouts = [];
  }
  render() {
    // console.log(JSON.stringify(workoutsJson, null, 2));
    return (
      <View>
        <WorkoutsScreen workouts={workoutsJson.default} />
      </View>
    );
  }
};


export default WorkoutApp;
