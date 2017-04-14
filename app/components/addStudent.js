
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class AddStudent extends Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Add Student',
    headerRight: <Button title='Submit' onPress={() => navigation.navigate('Students')}/>,
  });
  constructor(props){
    super(props)

    this.state = {
      studentName: '',
      studentEmail: '',
      studentCampus: ''
    }
  }

  render(){
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder='Student Name'
          onChangeText={(studentName) => this.setState({studentName})}
          value={this.state.studentName}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder='Student Email'
          keyboardType='email-address'
          onChangeText={(studentEmail) => this.setState({studentEmail})}
          value={this.state.studentEmail}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder='Student Campus'
          onChangeText={(studentCampus) => this.setState({studentCampus})}
          value={this.state.studentCampus}
        />
      </View>
    )
  }
}
