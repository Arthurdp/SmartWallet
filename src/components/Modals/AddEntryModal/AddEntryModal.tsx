import React, { useEffect } from "react";
import { Alert, Modal, Platform } from "react-native";
import { AddEntryForm, Button, ButtonText, Container, DateInput, DateText, ImageStyle, InputLabel, InputSection, InputSectionDate, RadioButton, RadioButtonText, RadioButtons, TextInputDate, TextInputStyled } from "./style";
import theme from "@styles/theme";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

interface AddEntryModalProps {
    showModal: boolean;
    buildEntry: (description: string, value: number, local: string, payment: string, date: Date, tag: string, type: string) => void;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddEntryModal(props: AddEntryModalProps) {

    const [type, setType] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [value, setValue] = React.useState('');
    const [local, setLocal] = React.useState(null);
    const [payment, setPayment] = React.useState(null);
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [tag, setTag] = React.useState(null);

    const [errorMessage, setErrorMessage] = React.useState("Por favor, verifique os campos e tente novamente.");
    const [errorMessageDate, setErrorMessageDate] = React.useState(null);
    const [errorMessageValue, setErrorMessageValue] = React.useState(null);

    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [showTimePicker, setShowTimePicker] = React.useState(false);

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
        if (value == "") {
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
        setDate('');
        setTime('');
        setTag(null);
        setErrorMessage(null);
        setErrorMessageDate(null);
        setErrorMessageValue(null);
    }

    const saveEntry = () => {
        validate();
        if (validate()) {
            props.buildEntry(
                description,
                moneyToNumber(value),
                local,
                payment,
                new Date(formatStringDate(date, time)),
                tag,
                type
            )
            resetFields();
            props.setShowModal(false);
        }
        else {
            Alert.alert("Erro", errorMessage);
        }
    }

    const onChangeDate = (event, selectedDate) => {
        if (event.type == 'dismissed') {
            setShowDatePicker(false);
            return
        }
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(moment(currentDate).format("DD/MM/YYYY"));
    }

    const onChangeTime = (event, selectedTime) => {
        if (event.type == 'dismissed') {
            setShowTimePicker(false);
            return
        }
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(moment(currentTime).format("HH:mm"));
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
                            {showDatePicker &&
                                <DateTimePicker
                                    value={new Date()}
                                    onChange={onChangeDate}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                />
                            }
                            <InputLabel>Data</InputLabel>
                            <TextInputDate
                                onPress={() => { setShowDatePicker(true) }}>
                                <DateText textColor={date == "" ? theme.COLORS.DISABLE : theme.COLORS.PRIMARY}>{date == "" ? "DD/MM/YYYY" : date}</DateText>
                            </TextInputDate>
                        </InputSectionDate>
                        <InputSectionDate>
                            {showTimePicker &&
                                <DateTimePicker
                                    value={new Date()}
                                    onChange={onChangeTime}
                                    mode="time"
                                    is24Hour={true}
                                    display="default"
                                />
                            }
                            <InputLabel>Hora</InputLabel>
                            <TextInputDate
                                onPress={() => { setShowTimePicker(true) }}>
                                <DateText textColor={time == "" ? theme.COLORS.DISABLE : theme.COLORS.PRIMARY}>{time == "" ? "00:00" : time}</DateText>
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

                    <Button bgColor={theme.COLORS.PRIMARY} onPress={() => { saveEntry() }}>
                        <ButtonText textColor={theme.COLORS.WHITE} >ADICIONAR NOVA ENTRADA</ButtonText>
                    </Button>
                    <Button bgColor={theme.COLORS.WHITE} onPress={() => { resetFields(); props.setShowModal(false) }}>
                        <ButtonText textColor={theme.COLORS.PRIMARY}>CANCELAR</ButtonText>
                    </Button>

                </AddEntryForm>
            </Container>
        </Modal>
    )
}