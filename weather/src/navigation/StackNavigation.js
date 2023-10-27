import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#0C0926'
                }
            }}
        >
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'F',
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 30,
                        fontWeight: '700'
                    },
                    headerTransparent: true,
                    headerRight: () => <MaterialIcons name="more-vert" size={30} color="white" />
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation;