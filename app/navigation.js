'use strict'

import {StackNavigator, TabNavigator} from 'react-navigation';

import Students from './containers/StudentsContainer';
import Student from './containers/StudentContainer';
import Campuses from './containers/CampusesContainer';
import Campus from './containers/CampusContainer';
import AddStudent from './components/addStudent';
import AddCampus from './components/addCampus';
import EditCampus from './components/editCampus';
import EditStudent from './components/editStudent';


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
  EditCampus: {screen: EditCampus},
  EditStudent: {screen: EditStudent},
  Student: {screen: Student},
  Campus: {screen: Campus}
});
