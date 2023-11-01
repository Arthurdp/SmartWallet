import { useState } from "react";
import { BottomBar, Button, ButtonText, Container, ContentBody, ContentFooter, ContentHeader, ForgotPasswordButton, ForgotPasswordText, InputSection, LoginButtons, LoginForm, LogoImg, TextInputStyled, TitleText } from "./styles";
import { Alert, Image } from "react-native";
import theme from "@styles/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



import auth from "@react-native-firebase/auth";

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const goToRegister = () => {
        nav.push("Register")
    }

    const goToForgotPassword = () => {
        nav.push("ForgotPassword")
    }

    const goToMainFlow = async () => {
        if (email && password) {
            try {
                const response = await auth().signInWithEmailAndPassword(
                    email,
                    password
                );

                if (response.user) {
                    nav.replace("MainFlow")
                }
            } catch (error) {
                Alert.alert("Error", "Por favor, verifique se os dados foram preenchidos corretamente e tente novamente.")
            }
        }
    }

    return (
        <Container>
            <ContentHeader>
                <LogoImg source={require("@assets/wallet-logo.png")}></LogoImg>
                <TitleText>ENTRAR</TitleText>
            </ContentHeader>

            <ContentBody>
                <LoginForm>
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

                </LoginForm>
                <ForgotPasswordButton onPress={goToForgotPassword}>
                    <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                </ForgotPasswordButton>
            </ContentBody>

            <ContentFooter>
                <LoginButtons>
                    <Button>
                        <ButtonText textColor={theme.COLORS.PRIMARY} onPress={goToRegister}>REGISTRAR</ButtonText>
                    </Button>
                    <Button bgColor={theme.COLORS.PRIMARY}>
                        <ButtonText textColor={theme.COLORS.WHITE} onPress={goToMainFlow}>ENTRAR</ButtonText>
                    </Button>
                </LoginButtons>
            </ContentFooter>
        </Container>
    )
}