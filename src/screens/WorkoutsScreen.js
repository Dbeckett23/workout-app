import React, { Component } from 'react';

import { ListItem } from 'react-native-elements';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderWorkout = ({ item: workout }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{workout.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron >
          <Icon
            name='right'
          />
        </ListItem.Chevron>
      </ListItem>
    )
  }
  // TODO: display the list of workouts loaded from the json
  render() {
  const { workouts } = this.props
    return(
      <View>
        <FlatList
          keyExtractor={workout => workout.id}
          renderItem={this.renderWorkout}
          data={workouts}
        />
      </View>
    );
  }
}


export default WorkoutScreen;