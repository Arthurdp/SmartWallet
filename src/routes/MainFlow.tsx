import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import { Home } from "@screens/Home/Home";
import Account from "@screens/Account/Account";
import theme from "@styles/theme";
import AddEntryModal from "@components/Modals/AddEntryModal/AddEntryModal";
import { AddButton } from "@screens/Home/styles";

interface MainFlowProps {

}
headerShown: false

const Tab = createBottomTabNavigator();

export default function TabNavigationName(props: MainFlowProps) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    if (route.name == "Home") {
                        icon = focused
                            ? require("@assets/icons/home-focus-icon.png")
                            : require("@assets/icons/home-icon.png")
                    } else if (route.name == "Account") {
                        icon = focused
                            ? require("@assets/icons/user-focus-icon.png")
                            : require("@assets/icons/user-icon-screen.png")
                    }

                    return <Image source={icon}></Image>
                },
                tabBarStyle: {
                    zIndex: 0
                },
                tabBarActiveTintColor: theme.COLORS.PRIMARY,
                tabBarInactiveTintColor: theme.COLORS.DISABLE,
                headerShown: false,

            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}