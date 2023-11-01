import React from "react";
import {
  Container,
  HearingTitle,
  MicrophoneButton,
  MicrophoneImage,
  SafeAreaViewStyled,
  ContentHeader,
  ContentBody,
  Balance,
  TotalBalance,
  LinearGradientStyled,
  HistoryBox,
  TimeResume,
  TimeResumeInfo,
  TimeResumeBox,
  TimeResumeTitle,
  TimeResumeValue,
  DropdownButton,
  FilterText,
  DayFilter,
  HelpButton,
  HelpButtonText,
  AddButton,
  AddButtonText,
  HeaderButtons
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
import EntriesList from "@components/EntriesList/EntriesList";
import AddEntryModal from "@components/Modals/AddEntryModal/AddEntryModal";
import HelpModal from "@components/Modals/HelpModal/HelpModal";
import Dropdown from "@components/Dropdown/Dropdown";

const Home = () => {

  const mock = new Mocks();

  const [started, setStarted] = useState(false);
  const [daysFilter, setDaysFilter] = useState(7);
  const [historic, setHistoric] = useState<Historic>(mock.historicMock);
  const [renderSwitch, setRenderSwitch] = useState(false);

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
    Alert.alert("Não entendi, pode repetir?");
  }

  const onSpeechResults = (results: any) => {
    setStarted(false);
    splitRecognition(results.value);
  }

  const getLastEntryes = () => {
    let lastEntries: Historic = new Historic(0, 0, 0, []);
    let limitDate = new Date(Date.now() - (1000 * 60 * 60 * 24 * daysFilter));
    let safeIndex;

    if (daysFilter > historic.dayEntryes.length) {
      safeIndex = historic.dayEntryes.length;
    } else {
      safeIndex = daysFilter;
    }
    for (let i = 0; i < safeIndex; i++) {
      if (historic.dayEntryes[i].date >= limitDate) {
        lastEntries.addDayEntry(historic.dayEntryes[i]);
      }
    }

    return lastEntries.calculateResume();
  }

  const splitRecognition = (results: any) => {
    console.log(results[0]);
    let error = false;
    let errorMessage: string = "Não entendi direito, Pode repetir?";

    let processing: string = "";
    let type: string = "";

    let description: string = "";
    let value: number = 0;
    let local: string = "";
    let payment: string = "";
    let tag: string = "";

    if (results[0].includes("cancelar")) {
      error = true
      Alert.alert("Cancelado com sucesso");
      return
    }

    if (results[0].includes("receita")) {
      type = "receita";
      processing = results[0].split("receita ")[1];
    } else if (results[0].includes("despesa")) {
      processing = results[0].split("despesa ")[1];
      type = "despesa";
    }
    else {
      alert("A palavra Despesa ou Receita não foi detectada");
      error = true;
    }

    if (processing.includes("valor")) {
      description = processing.split(" valor ")[0];
      processing = processing.split(" valor ")[1];

    } else {
      error = true;
      errorMessage = "É necessário dizer um valor";
    }

    try {
      if (!Number.isNaN(moneyToNumber(processing))) {
        value = moneyToNumber(processing.split(" local ")[0]);
        processing = processing.split(" local ")[1];
      }
    } catch (error) {
      error = true;
      errorMessage = "É necessário dizer um valor";
    }

    try {
      local = processing.split(" pagamento ")[0];
      processing = processing.split(" pagamento ")[1];
    } catch (error) {

    }

    try {
      payment = processing.split(" tag " || " tegue ")[0];
      tag = processing.split(" tag " || " tegue ")[1];
    } catch (error) {

    }

    // entry.forEach(word => {
    //   if (word === "despesa" || word === "receita" || word === "valor" || word === "pagamento" || word === "local" || word === "tegue") {
    //   }
    // });

    if (!error) {
      let date: Date = new Date(Date.now());

      console.log("Income/Expense: " + description);
      console.log("Value: " + value);
      console.log("Local: " + local);
      console.log("Payment: " + payment);
      console.log("Date: " + date);
      console.log("Tag: " + tag);
      console.log("Type: " + type);

      buildEntry(description, value, local, payment, date, tag, type);
    } else {
      alert(errorMessage);
    }

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
        dayEntry.orderEntriesByDate();

        return dayEntry;
      }
    });

    if (!verifyDay) {
      verifyDay = new DayEntry(date, 0, 0, 0, []);
      entry = new Entry(verifyDay.entryes.length, description, value, local, payment, date, tag, type);
      verifyDay = verifyDay.addEntry(entry);
      verifyDay.orderEntriesByDate();
      historic.addDayEntry(verifyDay);
    }

    historic.updateData();
    setRenderSwitch(!renderSwitch);
  }

  const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const getDaysRange = () => {
    let limitDate = new Date(Date.now() - (1000 * 60 * 60 * 24 * daysFilter));
    let limitDay = limitDate.getDate();
    let limitMonth = limitDate.getMonth();

    let actualDay = new Date().getDate();
    let actualMonth = new Date().getMonth();

    return limitDay + " " + monthNames[limitMonth] + " - " + actualDay + " " + monthNames[actualMonth];
  }

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />


      <LinearGradientStyled colors={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN : theme.COLORS.GRADIENT_RED} locations={[0.13, 1]}>
        <ContentHeader>
          <SafeAreaViewStyled>
            <HelpButton onPress={() => setShowHelp(true)}>
              <HelpButtonText>Ajuda</HelpButtonText>
            </HelpButton>
            <HelpModal showModal={showHelp} setShowModal={setShowHelp} />
              {!started ? (
                <View>
                  <MicrophoneButton bgColor={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN : theme.COLORS.GRADIENT_RED} onPressIn={startSpeechToText}>
                    <MicrophoneImage source={require("@assets/icons/white-microphone.png")} ></MicrophoneImage>
                  </MicrophoneButton>
                  <HearingTitle>Segure para falar</HearingTitle>
                </View>
              ) : (
                <View>
                  <MicrophoneButton bgColor={historic.balance >= 0 ? theme.COLORS.GRADIENT_GREEN2 : theme.COLORS.GRADIENT_RED2} onPressOut={stopSpeechToText}>
                    <MicrophoneImage source={require("@assets/icons/white-microphone.png")} ></MicrophoneImage>
                  </MicrophoneButton>
                  <HearingTitle>Escutando...</HearingTitle>
                </View>
              )}

            <TotalBalance balance={historic.balance}>Balanço Total</TotalBalance>
            <Balance> R${historic.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Balance>

          </SafeAreaViewStyled>
        </ContentHeader>
      </LinearGradientStyled>

      <ContentBody>
        <HistoryBox>
          <DayFilter>

            <Dropdown setDaysFilter={setDaysFilter} daysFilter={daysFilter}></Dropdown>
            <FilterText>
              {getDaysRange()}
            </FilterText>

          </DayFilter>

          <TimeResume>
            <TimeResumeBox>
              <Image width={48} height={48} source={require("@assets/icons/Income.png")} />
              <TimeResumeInfo>
                <TimeResumeTitle>Receita</TimeResumeTitle>
                <TimeResumeValue>R${getLastEntryes().income.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TimeResumeValue>
              </TimeResumeInfo>
            </TimeResumeBox>
            <TimeResumeBox>
              <Image width={48} height={48} source={require("@assets/icons/Spending.png")} />
              <TimeResumeInfo>
                <TimeResumeTitle>Despesa</TimeResumeTitle>
                <TimeResumeValue>R${getLastEntryes().expense.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TimeResumeValue>
              </TimeResumeInfo>
            </TimeResumeBox>
          </TimeResume>
          <EntriesList setRenderSwitch={setRenderSwitch} renderSwitch={renderSwitch} historic={historic} lastEntryes={getLastEntryes()} />
        </HistoryBox>
      </ContentBody>
      <AddEntryModal buildEntry={buildEntry} showModal={showModal} setShowModal={setShowModal}></AddEntryModal>
    </Container >
  );
};

export { Home };
