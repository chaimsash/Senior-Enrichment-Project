import React, {Component} from 'react';
import { Picker, StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class addStudent extends Component{
  static navigationOptions = () => ({
    title: 'Add Student',
    // headerRight: <Button title='Submit' onPress={() => this.handleSubmit()}/>,
  });

  constructor(props){
    super(props)
    const navProps = props.navigation.state.params;
    this.state = {
      studentName: navProps ? props.navigation.state.params.name : '',
      studentEmail: navProps ? props.navigation.state.params.email : '',
      studentCampus: navProps ? props.navigation.state.params.campus : {}
    }
  }

  handleSubmit(){
    const navProps = this.props.navigation.state.params;
    const id = navProps ? navProps.id : null;
    this.props.postStudent(id, this.state.studentName, this.state.studentEmail, this.state.studentCampus.id);
    this.props.navigation.navigate('Students');
  }

  destroy(id){
    this.props.startRemovingStudent(id);
    this.props.navigation.navigate('Students');
  }

  render(){
    const navProps = this.props.navigation.state.params;
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
        <Picker
          selectedValue={this.state.studentCampus}
          onValueChange={(studentCampus) => this.setState({studentCampus})}>
          {this.props.campuses.map(campus => {
            return <Picker.Item key={campus.name} label={campus.name} value={campus} />
          })}
        </Picker>
        <Button title={ navProps ? 'Update' : 'Submit' } onPress={() => this.handleSubmit()}/>
        { navProps ? <Button title='Remove' color='red' onPress={() => this.destroy(navProps.id)} /> : <Text></Text>}
      </View>
    )
  }
}
