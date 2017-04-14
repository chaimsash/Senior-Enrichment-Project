
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class AddCampus extends Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Add Campus',
    headerRight: <Button title='Submit' onPress={() => console.log(this.props)}/>,
  });
  constructor(props){
    super(props)

    this.state = {
      campusName: '',
      campusColor: ''
    }
  }

  render(){
    console.log(this.props)
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
      </View>
    )
  }
}
