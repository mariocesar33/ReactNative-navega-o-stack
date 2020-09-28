import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

import UserForm from './views/UserForm';
import UserList from './views/UserList';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="name_UserList"
        screenOptions={screenOption}
      >
        <Stack.Screen
          name="name_UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Lista de Utlizadores",

              headerRight: () => (
                <Button 
                  onPress={() => navigation.navigate("name_UserForm")}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white"/>}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="name_UserForm"
          component={UserForm}
          options={{
            title: "Formulário de Utilizadores"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const screenOption = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

export default App;