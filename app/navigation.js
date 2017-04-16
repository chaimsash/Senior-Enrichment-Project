'use strict'

import {StackNavigator, TabNavigator} from 'react-navigation';

import Students from './containers/StudentsContainer';
import Student from './containers/StudentContainer';
import Campuses from './containers/CampusesContainer';
import Campus from './containers/CampusContainer';
import AddStudent from './containers/AddStudentContainer';
import AddCampus from './containers/AddCampusContainer';


const Tabs = TabNavigator({
    Campuses: {
        screen: Campuses
    },
    Students: {
        screen: Students
    }
}, {
    tabBarOptions: {
        activeTintColor: '#000'
    }
});

export const Nav = StackNavigator({
	Main: { screen: Tabs },
  AddStudent: {screen: AddStudent},
  AddCampus: {screen: AddCampus},
  Student: {screen: Student},
  Campus: {screen: Campus}
});
