import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculationScreen from './training/CalculationScreen';

const Tab = createBottomTabNavigator();

export default function Training() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Addition" component={CalculationScreen} 
          initialParams={{ operation: '+' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="plus" {...props} />
            ),
          }}
          />
        <Tab.Screen 
          name="Substraction" component={CalculationScreen}
          initialParams={{ operation: '-' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="minus" {...props} />
            ),
          }}
        />
        <Tab.Screen 
          name="Multiplication" component={CalculationScreen} 
          initialParams={{ operation: '*' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="multiplication" {...props} />
            ),
          }}
        />
        <Tab.Screen 
          name="Division" component={CalculationScreen} 
          initialParams={{ operation: '/' }}
          options={{
            tabBarIcon: (props) => (
              <Icon name="division" {...props} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
