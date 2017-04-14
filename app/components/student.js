import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class Student extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Student ' + navigation.state.params.name,
      headerRight: <Button title='Edit' onPress={() => navigation.navigate('EditStudent', navigation.state.params)}/>,
    });

    componentDidMount() {
      this.props.getStudent(this.props.navigation.state.params.id);
    }

    render() {
        return (
          <View style={styles.container}>
            <View>
                <Text>Name: {this.props.student.name && this.props.student.name}</Text>
            </View>
            <View >
                <Text>Campus: {this.props.student.name && this.props.student.campus.name}</Text>
            </View>
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
