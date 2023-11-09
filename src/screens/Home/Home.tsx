import React from "react";
import {
  Container,
  HearingTitle,
  MicrophoneImage,
  SafeAreaViewStyled,
  ContentHeader,
  ContentBody,
  Balance,
  TotalBalance,
  LinearGradientStyled,
  HelpButton,
  HelpButtonText,
  AddButton,
  AddButtonText,
  HistoricView,
  AddButtonView,
} from "./styles";
import { Alert, Image, Modal, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Voice from "@react-native-voice/voice";
import { Entry } from "@models/Entry";
import { DayEntry } from "@models/DayEntry";
import theme from "@styles/theme";
import { StatusBar } from "expo-status-bar";
import { Historic } from "@models/Historic";
import { Mocks } from "@models/mocks";
import AddEntryModal from "@components/Modals/AddEntryModal/AddEntryModal";
import HelpModal from "@components/Modals/HelpModal/HelpModal";
import Dropdown from "@components/Dropdown/Dropdown";
import HistoricSection from "@components/EntriesList/HistoricSection";

const Home = () => {

  const mock = new Mocks();

  const [started, setStarted] = useState(false);
  const [historic, setHistoric] = useState<Historic>(mock.historicMock);
  const [renderSwitch, setRenderSwitch] = useState(false);
  const [daysFilter, setDaysFilter] = useState(7);

  const [showModal, setShowModal] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("pt-BR");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechError = (e: any) => {
    setStarted(false);
    Alert.alert("Erro", "Não entendi, pode repetir?");
  }

  const onSpeechResults = (results: any) => {
    setStarted(false);
    splitRecognition(results.value);
  }

  const splitRecognition = (results: any) => {
    console.log(results[0]);
    let keywords = ["receita", "despesa", "valor", "local", "pagamento", "tag", "tegue"];

    let type: string = "";
    let description: string = "";
    let value: number;
    let local: string = "";
    let payment: string = "";
    let tag: string = "";

    if (results[0].includes("cancelar")) {
      Alert.alert("Cancelado", "Entrada cancelada!");
      return
    }

    if (!results[0].includes("despesa")) {
      if (!results[0].includes("receita")) {
        Alert.alert("Erro", "A palavra Despesa ou Receita não foi detectada");
        return
      }
    }

    if (results[0].includes("despesa")) {
      if (results[0].includes("receita")) {
        Alert.alert("Erro", "A palavra Despesa e Receita não podem estar na mesma frase");
        return
      }
    }

    if (!results[0].includes("valor")) {
      Alert.alert("Erro", "É necessário dizer um valor");
      return
    }

    keywords.forEach(keyword => {
      if (results[0].includes(keyword)) {

        switch (keyword) {
          case "receita":
            type = keyword;
            description = removeFirstEmptySpace(getValueOfKeyword(results[0], keyword, keywords));
            break;
          case "despesa":
            type = keyword;
            description = removeFirstEmptySpace(getValueOfKeyword(results[0], keyword, keywords));
            break;
          case "valor":
            if (!Number.isNaN(moneyToNumber(getValueOfKeyword(results[0], keyword, keywords)))) {
              value = moneyToNumber(getValueOfKeyword(results[0], keyword, keywords));
            } else {
              Alert.alert("Erro", "Não entendi o valor, pode repetir?");
              return
            }
            break;
          case "local":
            local = removeFirstEmptySpace(getValueOfKeyword(results[0], keyword, keywords));
            break;
          case "pagamento":
            payment = removeFirstEmptySpace(getValueOfKeyword(results[0], keyword, keywords));
            break;
          case "tag" || "tegue":
            tag = removeFirstEmptySpace(getValueOfKeyword(results[0], keyword, keywords));
            break;
        }

      }
    });

    if (value == undefined) {
      return
    }

    let date: Date = new Date(Date.now());

    console.log("Description: " + description);
    console.log("Value: " + value);
    console.log("Local: " + local);
    console.log("Payment: " + payment);
    console.log("Date: " + date);
    console.log("Tag: " + tag);
    console.log("Type: " + type);

    buildEntry(captalizeFirstLetter(description), value, captalizeFirstLetter(local), captalizeFirstLetter(payment), date, captalizeFirstLetter(tag), type);
  }

  const captalizeFirstLetter = (string: string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getValueOfKeyword = (text: string, keyword: string, keywords: string[]): string => {
    let textSplited: string[] = text.split(keyword);
    let wantedValue: string = textSplited[1];
    let flag: boolean = true
    while (flag) {
      keywords.forEach(key => {
        if (wantedValue.includes(key)) {
          wantedValue = wantedValue.split(key)[0];
        }
        else {
          flag = false
        }
      })
    }
    return wantedValue
  }

  const removeFirstEmptySpace = (text: string): string => {
    if (text.charAt(0) === " ") {
      return text.substring(1);
    }
    return text
  }


  const moneyToNumber = (money: string) => {
    return parseFloat(money.replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
      .replace(',', '.')) // Transforma a virgula em ponto.;
  }

  const buildEntry = (description: string, value: number, local: string, payment: string, date: Date, tag: string, type: string) => {
    let entry: Entry;

    let verifyDay: DayEntry;
    verifyDay = historic.dayEntryes.find(dayEntry => {
      if (dayEntry.date.toDateString() === date.toDateString()) {
        entry = new Entry(dayEntry.entryes.length, description, value, local, payment, date, tag, type);
        dayEntry.addEntry(entry);

        return dayEntry;
      }
    });

    if (!verifyDay) {
      verifyDay = new DayEntry(date, 0, 0, 0, []);
      entry = new Entry(verifyDay.entryes.length, description, value, local, payment, date, tag, type);
      verifyDay = verifyDay.addEntry(entry);
      historic.addDayEntry(verifyDay);
    }

    historic.updateHistoricData();

    setRenderSwitch(prev => !prev);
  }

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradientStyled colors={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN : theme.COLORS.GRADIENT_RED} locations={[0.13, 1]}>
        <ContentHeader>
          <SafeAreaViewStyled>
            <TotalBalance balance={historic.balance}>Balanço Total</TotalBalance>
            <Balance> R${historic.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Balance>

            {!started ? (
              <View>
                <HearingTitle>Segure para falar{"\n"} Toque para escrever</HearingTitle>
                <AddButtonView bgColor={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN2 : theme.COLORS.GRADIENT_RED2} onLongPress={startSpeechToText} onPress={() => setShowModal(true)}>
                  <AddButton bgColor={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN_BUTTON : theme.COLORS.GRADIENT_RED_BUTTON} >
                    <AddButtonText>+</AddButtonText>
                  </AddButton>
                </AddButtonView>
              </View>
            ) : (
              <View>
                <HearingTitle>{"\n"}Escutando...</HearingTitle>
                <AddButtonView bgColor={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN2 : theme.COLORS.GRADIENT_RED2} onPress={stopSpeechToText}>
                  <MicrophoneImage source={require("@assets/icons/white-microphone.png")} ></MicrophoneImage>
                </AddButtonView>
              </View>
            )}
            <HelpModal showModal={showHelp} setShowModal={setShowHelp} />
            <HelpButton onPress={() => setShowHelp(true)}>
              <HelpButtonText>Ajuda</HelpButtonText>
            </HelpButton>
          </SafeAreaViewStyled>
        </ContentHeader>
      </LinearGradientStyled>
      <HistoricView>
        <HistoricSection daysFilter={daysFilter} setDaysFilter={setDaysFilter} historic={historic} renderSwitch={renderSwitch} setRenderSwitch={setRenderSwitch} />
      </HistoricView>
      <ContentBody>

      </ContentBody>
      <AddEntryModal buildEntry={buildEntry} showModal={showModal} setShowModal={setShowModal}></AddEntryModal>
    </Container >
  );
};

export { Home };
