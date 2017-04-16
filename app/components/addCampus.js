import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class addCampus extends Component{
  static navigationOptions = () => ({
    title: 'Add Campus',
    // headerRight: <Button title='Submit' onPress={() => this.handleSubmit()} />
  });

  constructor(props){
    super(props)
    const navProps = props.navigation.state.params;
    this.state = {
      campusName: navProps ? props.navigation.state.params.name : '',
      campusColor: navProps ? props.navigation.state.params.color : ''
    }
  }

  handleSubmit(){
    const navProps = this.props.navigation.state.params;
    const id = navProps ? navProps.id : null;
    this.props.postCampus(id, this.state.campusName, this.state.campusColor);
    this.props.navigation.navigate('Campuses');
  }

  destroy(id){
    this.props.startRemovingCampus(id);
    this.props.navigation.navigate('Campuses');
  }

  render(){
    const navProps = this.props.navigation.state.params;
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
        <Button title={ navProps ? 'Update' : 'Submit' } onPress={() => this.handleSubmit()}/>
        { navProps ? <Button title='Remove' color='red' onPress={() => this.destroy(navProps.id)} /> : <Text></Text>}
      </View>
    )
  }
}
