
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class EditStudent extends Component{
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Edit Student ' + navigation.state.params.name,
    headerRight: <Button title='Submit' onPress={() => navigation.navigate('Students')}/>,
  });
  constructor(props){
    super(props)

    this.state = {
      studentName: props.navigation.state.params.name,
      studentEmail: props.navigation.state.params.email,
      studentCampus: props.navigation.state.params.campus.name
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
      <Button title='Remove' color='red' onPress={() => this.props.navigation.navigate('Campuses')} />
      </View>
    )
  }
}
