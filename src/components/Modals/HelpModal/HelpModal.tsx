import React from "react";
import { Modal, View } from "react-native";
import { Box, Button, ButtonText, Container, Title, TitleInfo, Topic, TopicInfo } from "./style";
import theme from "@styles/theme";
import { ScrollView } from "react-native";

interface HelpModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HelpModal(props: HelpModalProps) {

    const helpText = {
        title: "Como usar o comando de voz?",
        titleInfo: "Para começar, toque e segure no botão de + para iniciar a captura de voz e solte quando concluir o comando.\n\n Siga as 3 regras a seguir:",
        topics: [
            {
                title: "1 - Existem 6 palavras chave para reconhecer os dados de uma entrada",
                info: ["Despesa, Receita, Valor, Local, Pagamento e Tag (Ex: Alimentação, Compras...)"],
            },
            {
                title: "2 - O tipo de entrada e o valor devem ser especificados",
                info: ["Diga apenas ou Despesa ou Receita para o tipo de entrada"],
            },
            {
                title: "3 - Para cancelar a captura de voz, fale 'Cancelar' a qualquer momento",
            },
            {
                title: "Exemplos de fala para captura de voz:",
                info: ["1 - 'Despesa, Celular novo, Valor 1000 reais'",
                    "2 - 'Despesa, Coxinha, Valor 5 reais, Local Barraquinha da Ju, Pagamento Cartão de Crédito, Tag Alimentação'",
                    "3 - 'Receita, Salário do mês, Valor 1000 reais'"]
            },
            {
                title: "Caso não possa falar. Apenas pressione o botão + para escrever manualmente os dados",
            },
        ]
    }

    return (
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={props.showModal}
        >
            <Container>
                <Box>
                    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

                        <Title>{helpText.title}</Title>
                        <TitleInfo> {helpText.titleInfo}</TitleInfo>

                        {helpText.topics.map((item, index) => {
                            return (<View key={index}>

                                <Topic >{item.title}</Topic>
                                {item.info && item.info.map((info, index) => {
                                    return <TopicInfo textColor={item.info.length > 1 ? theme.COLORS.DISABLE : theme.COLORS.PRIMARY} key={index}>{info}</TopicInfo>
                                }
                                )}
                            </View>
                            )
                        })}

                    </ScrollView>
                    <Button bgColor={theme.COLORS.PRIMARY} onPress={() => { props.setShowModal(false) }}>
                        <ButtonText textColor={theme.COLORS.WHITE} >ENTENDI</ButtonText>
                    </Button>
                </Box>

            </Container>
        </Modal>
    )
}