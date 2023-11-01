import { StyleSheet, Text, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import {
  IBMPlexSans_600SemiBold,
} from "@expo-google-fonts/ibm-plex-sans";

import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import theme from "@styles/theme";
import MainRouter from "@routes/MainRouter";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Nunito_300Light,
          Nunito_400Regular,
          Nunito_500Medium,
          Nunito_600SemiBold,
          Nunito_700Bold,
          Nunito_800ExtraBold,
          Nunito_900Black,
          IBMPlexSans_600SemiBold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme} >
      <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
        <MainRouter></MainRouter>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
