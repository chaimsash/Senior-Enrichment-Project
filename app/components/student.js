import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class Student extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Student ' + navigation.state.params.name,
      headerRight: <Button title='Edit' onPress={() => navigation.navigate('AddStudent', navigation.state.params)}/>,
    });

    componentDidMount() {
      this.props.getStudent(this.props.navigation.state.params.id);
    }

    render() {
        return (
          <View style={styles.container}>
                <Text>Name: {this.props.student.name && this.props.student.name}</Text>
                <Text>Email: {this.props.student.name && this.props.student.email}</Text>
                <Text>Campus: {this.props.student.name && this.props.student.campus.name}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: 30,
    }
});
