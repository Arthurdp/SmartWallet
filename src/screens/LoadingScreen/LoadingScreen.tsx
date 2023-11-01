import { ActivityIndicator, StyleSheet, View } from "react-native";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { useEffect } from "react";
import theme from "@styles/theme";

export default function LoadingScreen() {

    const nav = useNavigation<NativeStackNavigationProp<any>>();

    function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
        setTimeout(() => {
            if (user) {
                nav.replace("MainFlow")
            }
            else {
                nav.replace("Login")
            }
        }, 2000)
    }

    useEffect(() => {
        const sub = auth().onAuthStateChanged(onAuthStateChanged);
        return sub;
    }, []);

    return (
        <View style={styles.container}>
            <Image style={{ width: 300, height: 210 }} source={require("@assets/smart-wallet-logo.png")} />
            <ActivityIndicator color={theme.COLORS.PRIMARY} size="large" style={{ position: "absolute", bottom: 250 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});