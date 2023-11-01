import React, { useEffect } from "react";
import { Modal } from "react-native";
import { AddEntryForm, Button, ButtonText, CancelButton, Container, DateInput, EditButtonsSection, ImageStyle, InputLabel, InputSection, InputSectionDate, RadioButton, RadioButtonText, RadioButtons, TextInputDate, TextInputStyled } from "./style";
import theme from "@styles/theme";
import { Entry } from "@models/Entry";
import { Historic } from "@models/Historic";

interface EditEntryModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    editEntry: Entry;
    setEditEntry: React.Dispatch<React.SetStateAction<Entry>>;
    renderSwitch: boolean;
    setRenderSwitch: React.Dispatch<React.SetStateAction<boolean>>;
    historic: Historic;
    children?: React.ReactNode;
}

export default function EditEntryModal(props: EditEntryModalProps) {

    const [type, setType] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [value, setValue] = React.useState('');
    const [local, setLocal] = React.useState(null);
    const [payment, setPayment] = React.useState(null);
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [tag, setTag] = React.useState(null);

    const [errorMessage, setErrorMessage] = React.useState(null);
    const [errorMessageDate, setErrorMessageDate] = React.useState(null);
    const [errorMessageValue, setErrorMessageValue] = React.useState("Por favor, verifique os campos e tente novamente.");

    useEffect(() => {
        setType(props.editEntry.type)
        setDescription(props.editEntry.description)
        setValue(props.editEntry.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
        setLocal(props.editEntry.local)
        setPayment(props.editEntry.payment)
        setDate(props.editEntry.time.toLocaleDateString("pt-BR"))
        setTime(props.editEntry.time.toLocaleTimeString("pt-BR"))
        setTag(props.editEntry.tag)
    }, [props.showModal])

    const validate = () => {
        let error = true;
        if (type == null) {
            setErrorMessage("Selecione o tipo de Entrada!");
            error = false;
        }
        if (description == null) {
            setErrorMessage("Descrição é Obrigatório!");
            error = false;
        }
        if (value === "") {
            setErrorMessage("Valor é Obrigatório!");
            error = false;
        }

        if (isNaN(moneyToNumber(value))) {
            setErrorMessage("Valor Inválido!");
            error = false
        }
        if (date == null) {
            setErrorMessage("Data é Obrigatório!");
            error = false;
        }
        if (time == null) {
            setErrorMessage("Hora é Obrigatório!");
            error = false;
        }

        let dateString = formatStringDate(date, time)
        let newDate: Date = new Date(dateString);
        if (newDate.toString() === "Invalid Date") {
            setErrorMessage("Data Inválida!");
            error = false;
        }
        return error
    }

    const formatStringDate = (date: string, time: string) => {
        let year = date.substring(6, 10);
        let month = date.substring(3, 5);
        let day = date.substring(0, 2);
        let newdate = year + "-" + month + "-" + day
        return newdate + " " + time
    }

    const moneyToNumber = (money: string) => {
        return parseFloat(money.replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
            .replace(',', '.')) // Transforma a virgula em ponto.;
    }

    const resetFields = () => {
        setType(null);
        setDescription(null);
        setValue('');
        setLocal(null);
        setPayment(null);
        setDate(null);
        setTime(null);
        setTag(null);
        setErrorMessage(null);
        setErrorMessageDate(null);
        setErrorMessageValue(null);
    }

    const edit = () => {
        validate();
        if (validate()) {
            props.editEntry.edit(
                description,
                moneyToNumber(value),
                local,
                payment,
                new Date(formatStringDate(date, time)),
                tag,
                type
            )
            props.historic.dayEntryes.find(dayEntry => {
                if (dayEntry.date.toLocaleDateString() == props.editEntry.time.toLocaleDateString()) {
                    dayEntry.updateData();
                }
            })
            props.historic.updateData();
            props.setRenderSwitch(!props.renderSwitch);
            props.setEditEntry(new Entry(0, "", 0, "", "", new Date(), "", ""));
            props.setShowModal(false);
        }
        else {
            alert(errorMessage);
        }
    }

    const deleteEntry = (entry: Entry) => {
        props.historic.deleteEntry(entry)
        props.historic.updateData();

        props.setRenderSwitch(!props.renderSwitch);
    }

    return (
        <Modal
            animationType="fade"
            statusBarTranslucent={true}
            transparent={true}
            visible={props.showModal}
        >
            <Container>
                <AddEntryForm>
                    <RadioButtons>
                        {type == "receita" ?
                            <RadioButton>
                                <RadioButtonText>{"receita"}</RadioButtonText>
                                <ImageStyle width={3} height={3} source={require("@assets/icons/selected-radio-button.png")} />
                            </RadioButton>
                            :
                            <RadioButton onPress={() => setType("receita")} >
                                <RadioButtonText>{"receita"}</RadioButtonText>
                                <ImageStyle width={3} height={3} source={require("@assets/icons/radio-button.png")} />
                            </RadioButton>
                        }
                        {type == "despesa" ?
                            <RadioButton>
                                <RadioButtonText>{"despesa"}</RadioButtonText>
                                <ImageStyle width={3} height={3} source={require("@assets/icons/selected-radio-button.png")} />
                            </RadioButton>
                            :
                            <RadioButton onPress={() => setType("despesa")} >
                                <RadioButtonText>{"despesa"}</RadioButtonText>
                                <ImageStyle width={3} height={3} source={require("@assets/icons/radio-button.png")} />
                            </RadioButton>
                        }

                    </RadioButtons>

                    <InputSection>
                        <InputLabel>Descrição</InputLabel>
                        <TextInputStyled
                            placeholder="Ex. Coxinha, Salário, Feira do mês..."
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={description}
                            errorMessage={errorMessage}
                            onChangeText={setDescription}>
                        </TextInputStyled>
                    </InputSection>

                    <InputSection>
                        <InputLabel>Valor</InputLabel>
                        <TextInputStyled
                            placeholder="Ex. 10,50..."
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={value}
                            errorMessage={errorMessageValue}
                            onChangeText={setValue}>
                        </TextInputStyled>
                    </InputSection>

                    <InputSection>
                        <InputLabel>Local {"(Opcional)"}</InputLabel>
                        <TextInputStyled
                            placeholder="Ex. Feira, Mercado, Seu Zé..."
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={local}
                            onChangeText={setLocal}>
                        </TextInputStyled>
                    </InputSection>

                    <InputSection>
                        <InputLabel>Modo de Pagamento {"(Opcional)"}</InputLabel>
                        <TextInputStyled
                            placeholder="Ex. Cartão de Credito, Dinheiro..."
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={payment}
                            onChangeText={setPayment}>
                        </TextInputStyled>
                    </InputSection>

                    <DateInput>
                        <InputSectionDate>
                            <InputLabel>Hora {'(00:00:00)'}</InputLabel>
                            <TextInputDate
                                placeholder="00:00:00"
                                placeholderTextColor={theme.COLORS.DISABLE}
                                value={time}
                                errorMessage={errorMessageDate}
                                onChangeText={setTime}>
                            </TextInputDate>
                        </InputSectionDate>
                    </DateInput>

                    <InputSection>
                        <InputLabel>Tag {"(Opcional)"}</InputLabel>
                        <TextInputStyled
                            placeholder="Ex. Alimentação, Transporte..."
                            placeholderTextColor={theme.COLORS.DISABLE}
                            value={tag}
                            onChangeText={setTag}
                        >
                        </TextInputStyled>
                    </InputSection>

                    <EditButtonsSection>
                        <Button bgColor={theme.COLORS.PRIMARY} onPress={() => { edit() }}>
                            <ButtonText textColor={theme.COLORS.WHITE} >SALVAR</ButtonText>
                        </Button>
                        <Button bgColor={theme.COLORS.SPENDING} onPress={() => { props.setShowModal(false); deleteEntry(props.editEntry) }}>
                            <ButtonText textColor={theme.COLORS.WHITE}>DELETAR</ButtonText>
                        </Button>
                    </EditButtonsSection>

                    <CancelButton bgColor={theme.COLORS.WHITE} onPress={() => { props.setShowModal(false) }}>
                        <ButtonText textColor={theme.COLORS.PRIMARY}>CANCELAR</ButtonText>
                    </CancelButton>

                </AddEntryForm>
            </Container>
        </Modal>
    )
}