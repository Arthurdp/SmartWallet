import { Alert, Image, Text } from "react-native";
import { Button, ButtonText, Container, ContentBody, ContentHeader, EditAccountForm, HeaderButton, HeaderButtonText, InputLabel, InputSection, LogoutButton, TextInputStyled, TitleText } from "./style";
import theme from "@styles/theme";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import auth from '@react-native-firebase/auth';
import db from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Account() {

    var currentUser:any = setUser();

    function getUser() {
        auth().onAuthStateChanged(user => {
            currentUser = user;
        })
    }

    async function setUser() {
        currentUser = await getUser();
    }

    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [password, setPassword] = useState(currentUser.password)

    const nav = useNavigation<NativeStackNavigationProp<any>>();

    const updateProfile = async () => {
        try {
            await db().collection("users").doc(auth().currentUser?.uid).update({
                firstName,
                lastName,
            })
            await auth().currentUser?.updatePassword(password)
            Alert.alert("Sucesso", "Perfil atualizado com sucesso.")
            
        } catch (error) {
            Alert.alert("Erro", "Verifique se os dados foram preenchidos corretamente.")
        }
    }

    const signout = async () => {
        try {
            await auth().signOut();
            nav.replace("Login");
        } catch (error) {
            Alert.alert("Erro", "Aconteceu um erro inesperado. Tente novamente mais tarde.")
        }
    }

    const goBack = () => {
        nav.goBack();
    }

    return (
        <Container>
            <SafeAreaView>
                <ContentHeader>
                    <HeaderButton>
                        <HeaderButtonText textColor={theme.COLORS.PRIMARY} onPress={goBack}>Cancelar</HeaderButtonText>
                    </HeaderButton>
                    <TitleText>Edição de conta</TitleText>
                    <HeaderButton>
                        <HeaderButtonText textColor={theme.COLORS.PRIMARY} onPress={updateProfile}>Salvar</HeaderButtonText>
                    </HeaderButton>
                </ContentHeader>
            </SafeAreaView>

            <ContentBody>
                <EditAccountForm>
                    <InputSection>
                        <InputLabel>Nome</InputLabel>
                        <TextInputStyled
                            placeholder="Primeiro Nome"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={firstName}
                            onChangeText={setFirstName}>
                        </TextInputStyled>
                    </InputSection>

                    <InputSection>
                        <InputLabel>Sobrenome</InputLabel>
                        <TextInputStyled
                            placeholder="Sobrenome"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={lastName}
                            onChangeText={setLastName}>
                        </TextInputStyled>
                    </InputSection>

                    <InputSection>
                        <InputLabel>Alterar Senha</InputLabel>
                        <TextInputStyled
                            placeholder="Senha"
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            autoCapitalize="none">
                        </TextInputStyled>
                    </InputSection>

                    <Button>
                        <ButtonText textColor={theme.COLORS.WHITE} onPress={updateProfile}>SALVAR MUDANÇAS</ButtonText>
                    </Button>

                </EditAccountForm>

            </ContentBody>
            <LogoutButton>
                <ButtonText textColor={theme.COLORS.PRIMARY} onPress={signout}>SAIR DA CONTA</ButtonText>
            </LogoutButton>
        </Container>
    )
}