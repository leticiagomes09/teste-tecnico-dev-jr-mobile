import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#E91E63',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Perfil') {
              iconName = 'person';
            } else if (route.name === 'Habilidades') {
              iconName = 'code-slash';
            } else if (route.name === 'Projetos') {
              iconName = 'briefcase';
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Tab.Screen
          name="Habilidades"
          component={HabilidadesScreen}
        />

        <Tab.Screen
          name="Projetos"
          component={ProjetosScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}