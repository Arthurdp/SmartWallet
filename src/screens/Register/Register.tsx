import { useState } from "react";
import { BottomBar, Button, ButtonText, Container, ContentBody, ContentFooter, ContentHeader, InputSection, LoginButtons, LogoImg, RegisterForm, TextInputStyled, TitleText } from "./styles";
import { Image, KeyboardAvoidingView } from "react-native";
import theme from "@styles/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";

import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/firestore";

interface RegisterProps {

}

export default function Register(props: RegisterProps) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const createProfile = async (response: any) => {
        await db().collection("users").doc(response.user.uid).set({
            firstName,
            lastName,
            email,
            password
        })
    }

    const registerAndGoToMainFlow = async () => {
        if (firstName && lastName && email && password) {
            try {
                const response = await auth().createUserWithEmailAndPassword(
                    email,
                    password
                );

                if (response.user) {
                    await createProfile(response);
                    nav.replace("Login")
                }
            } catch (error) {
                Alert.alert("Erro", "Por favor, verifique se os dados foram preenchidos corretamente e tente novamente.")
            }
        }
    }

    return (
        <Container>
            <ContentHeader>
                <LogoImg source={require("@assets/wallet-logo.png")}></LogoImg>
                <TitleText>REGISTRAR</TitleText>
            </ContentHeader>

            <ContentBody>
                <RegisterForm>
                    <InputSection>
                        <Image source={require("@assets/icons/user-icon.png")}></Image>
                        <TextInputStyled
                            placeholder="Primeiro Nome"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={firstName}
                            onChangeText={setFirstName}>
                        </TextInputStyled>
                    </InputSection>

                    <BottomBar></BottomBar>

                    <InputSection>
                        <Image source={require("@assets/icons/user-icon.png")}></Image>
                        <TextInputStyled
                            placeholder="Sobrenome"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={lastName}
                            onChangeText={setLastName}>
                        </TextInputStyled>
                    </InputSection>

                    <BottomBar></BottomBar>

                    <InputSection>
                        <Image source={require("@assets/icons/mail.png")}></Image>
                        <TextInputStyled
                            placeholder="Email"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none">
                        </TextInputStyled>
                    </InputSection>

                    <BottomBar></BottomBar>

                    <InputSection>
                        <Image source={require("@assets/icons/lock.png")}></Image>
                        <TextInputStyled
                            placeholder="Senha"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            autoCapitalize="none">
                        </TextInputStyled>
                    </InputSection>

                </RegisterForm>
            </ContentBody>

            <ContentFooter>
                <LoginButtons>
                    <Button>
                        <ButtonText textColor={theme.COLORS.PRIMARY} onPress={() => nav.goBack()}>CANCELAR</ButtonText>
                    </Button>
                    <Button bgColor={theme.COLORS.PRIMARY}>
                        <ButtonText textColor={theme.COLORS.WHITE} onPress={registerAndGoToMainFlow}>REGISTRAR</ButtonText>
                    </Button>
                </LoginButtons>
            </ContentFooter>

        </Container>
    )
}