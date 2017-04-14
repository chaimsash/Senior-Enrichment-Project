
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class EditCampus extends Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Edit ' + navigation.state.params.name + ' Campus',
    headerRight: <Button title='Submit' onPress={() => navigation.navigate('Campuses')}/>,
  });
  constructor(props){
    super(props)

    this.state = {
      campusName: props.navigation.state.params.name,
      campusColor: props.navigation.state.params.color
    }
  }

  render(){
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder='Campus Name'
          onChangeText={(campusName) => this.setState({campusName})}
          value={this.state.campusName}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder='Campus Color'
          onChangeText={(campusColor) => this.setState({campusColor})}
          value={this.state.campusColor}
        />
      <Button title='Remove' color='red' onPress={() => this.props.navigation.navigate('Campuses')} />
      </View>
    )
  }
}
