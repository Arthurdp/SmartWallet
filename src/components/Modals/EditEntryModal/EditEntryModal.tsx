import React, { useEffect } from "react";
import { Modal } from "react-native";
import { AddEntryForm, Button, ButtonText, CancelButton, Container, DateInput, DateText, EditButtonsSection, ImageStyle, InputLabel, InputSection, InputSectionDate, RadioButton, RadioButtonText, RadioButtons, TextInputDate, TextInputStyled } from "./style";
import theme from "@styles/theme";
import { Entry } from "@models/Entry";
import { Historic } from "@models/Historic";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

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

    const [showTimePicker, setShowTimePicker] = React.useState(false);

    const [errorMessage, setErrorMessage] = React.useState("Por favor, verifique os campos e tente novamente.");
    useEffect(() => {
        setType(props.editEntry.type)
        setDescription(props.editEntry.description)
        setValue(props.editEntry.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
        setLocal(props.editEntry.local)
        setPayment(props.editEntry.payment)
        setDate(moment(props.editEntry.time).format("DD/MM/YYYY"))
        setTime(moment(props.editEntry.time).format("HH:mm"))
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
                    dayEntry.updateDayData();
                }
            })
            props.historic.updateHistoricData();
            props.setRenderSwitch(prev => !prev);
            props.setEditEntry(new Entry(0, "", 0, "", "", new Date(), "", ""));
            props.setShowModal(false);
        }
        else {
            alert(errorMessage);
        }
    }

    const deleteEntry = (entry: Entry) => {
        props.historic.deleteEntry(entry)
        
        props.setRenderSwitch(prev => !prev);
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
                            {showTimePicker &&
                                <DateTimePicker
                                    value={props.editEntry.time}
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