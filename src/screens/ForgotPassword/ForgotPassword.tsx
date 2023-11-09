import { useState } from "react";
import { BottomBar, Button, ButtonText, Container, ContentBody, ContentFooter, ContentHeader, ForgotPasswordButton, ForgotPasswordText, InputSection, LoginButtons, LoginForm, LogoImg, TextInputStyled, TitleInfo, TitleText } from "./styles";
import { Alert, Image } from "react-native";
import theme from "@styles/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import auth from "@react-native-firebase/auth";

export default function ForgotPassword() {

    const [email, setEmail] = useState("")

    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const goToLogin = () => {
        nav.goBack()
    }

    const sendPasswordReset = async () => {
        if (email) {
            try {
                await auth().sendPasswordResetEmail(
                    email
                );
                Alert.alert("Sucesso", "E-mail Enviado, verifique seu email.")

                nav.goBack()

            } catch (error) {
                Alert.alert("Erro", "Este email não foi encontrado. Verifique e tente novamente.")
            }
        }
    }
        return (
            <Container>
                <ContentHeader>
                    <LogoImg source={require("@assets/wallet-logo.png")}></LogoImg>
                    <TitleText>RECUPERAR</TitleText>
                </ContentHeader>

                <ContentBody>
                    <TitleInfo>Digite seu E-mail cadastrado para que possamos enviar um link de recuperação de senha.</TitleInfo>
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

                    </LoginForm>
                </ContentBody>

                <ContentFooter>
                    <LoginButtons>
                        <Button>
                            <ButtonText textColor={theme.COLORS.PRIMARY} onPress={goToLogin}>VOLTAR</ButtonText>
                        </Button>
                        <Button bgColor={theme.COLORS.PRIMARY}>
                            <ButtonText textColor={theme.COLORS.WHITE} onPress={sendPasswordReset}>ENVIAR</ButtonText>
                        </Button>
                    </LoginButtons>
                </ContentFooter>
            </Container>
        )
    }