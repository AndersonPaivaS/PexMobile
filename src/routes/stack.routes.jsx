
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Start } from '../screens/Start';
import { Login } from '../screens/Login';
import { FirstRegistration } from '../screens/FistRegistration';

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='start'
                options={{
                    headerShown: false,
                }}
                component={Start}
            />

            <Screen
                name='login'
                options={{
                    headerShown: false,
                }}
                component={Login}
            />

            <Screen
                name='firstRegistration'
                options={{
                    headerShown: false,
                }}
                component={FirstRegistration}
            />

        </Navigator>
    )
}