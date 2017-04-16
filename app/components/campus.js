import React, {Component} from 'react';
import { TouchableHighlight, StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

import Hr from 'react-native-hr';

export default class Campus extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      title: navigation.state.params.name + ' Campus',
      headerRight: <Button title='Edit' onPress={() => navigation.navigate('AddCampus', navigation.state.params)}/>,
    });

    componentDidMount() {
      this.props.getCampus(this.props.navigation.state.params.id)
    }

    render() {
      console.log(this.props)
        return (
            <ScrollView>
              <Button title='Add a Student' onPress={() => this.props.navigation.navigate('AddStudent')}/>
              <View style={[styles.container, {marginBottom: 10}]}>
                <View>
                    <Text style={{color: '#999'}}>Name</Text>
                </View>
                <View >
                    <Text style={{color: '#999'}}>Email</Text>
                </View>
              </View>
              <View>
                <Hr lineColor='#999' />
              </View>
                {this.props.campus.map((student) => {
                    return (
                    <View key={student.name}>
                          <TouchableHighlight onPress={() => this.props.navigation.navigate('Student', student)}>
                            <View style={styles.container} >
                              <View>
                                  <Text>{student.name}</Text>
                              </View>
                              <View >
                                  <Text>{student.email}</Text>
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
