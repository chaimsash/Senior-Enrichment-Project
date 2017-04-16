import React, {Component} from 'react';
import { TouchableHighlight, StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

import Hr from 'react-native-hr';

import addStudent from './addStudent'

export default class Students extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Students',
      headerRight: <Button title='+Add' onPress={() => navigation.navigate('AddStudent')}/>,
      tabBarIcon: ({tintColor}) => (<Image source={require('../../students.png')} style={[
          styles.icon, {
              tintColor: tintColor
          }
      ]}/>)
    });

    componentDidMount(){
      this.props.getStudents();
    }

    render() {
        return (
            <ScrollView>
              <View style={[styles.container, {marginBottom: 10}]}>
                <View>
                    <Text style={{color: '#999'}}>Name</Text>
                </View>
                <View >
                    <Text style={{color: '#999'}}>Campus</Text>
                </View>
              </View>
              <View>
                <Hr lineColor='#999' />
              </View>
                {this.props.students.map((student) => {
                    return (
                    <View key={student.name}>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Student', student)}>
                            <View style={styles.container} >
                              <View>
                                  <Text>{student.name}</Text>
                              </View>
                              <View >
                                  <Text>{student.campus.name}</Text>
                              </View>
                            </View>
                          </TouchableHighlight>
                      <View>
                        <Hr lineColor='#ddd' />
                      </View>
                    </View>
                  )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 30,
    }
});
