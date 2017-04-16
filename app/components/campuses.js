import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TextInput, ScrollView, ListView, Button} from 'react-native';

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Campuses',
    headerRight: <Button title='+Add' onPress={() => navigation.navigate('AddCampus')}/>,
    tabBarIcon: ({tintColor}) => (<Image source={require('../../campuses.png')} style={[
        styles.icon, {
            tintColor: tintColor
        }
    ]}/>)
  });

    componentDidMount() {
      this.props.getCampuses()
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.props.campuses.map(function(campus) {
                    return (
                        <View key={campus.name} style={[
                            styles.campus, {
                                backgroundColor: campus.color
                            }
                        ]}>
                            <Button color="#fff" title={campus.name} onPress={() => navigate('Campus', campus)}/>
                        </View>
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF'
    },
    campus: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
