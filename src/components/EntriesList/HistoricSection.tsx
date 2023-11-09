import { ScrollView } from "react-native"
import { DayFilter, DayResume, DayTitle, DaysFilterText, DeleteIcon, DeleteSection, EntryRow, FilterButton, FilterButtons, FilterText, HistoryBox, HistoryHeader, Row, RowDescription, RowDescriptionText, RowInfo, RowPaymentText, RowTimeText, RowValueText, RowValues, TagIcon, TimeResume, TimeResumeBox, TimeResumeInfo, TimeResumeTitle, TimeResumeValue } from "./styles"
import { View, Image } from "react-native";
import { Historic } from "@models/Historic";
import { useEffect, useState } from "react";
import theme from "@styles/theme";
import { Entry } from "@models/Entry";
import EditEntryModal from "@components/Modals/EditEntryModal/EditEntryModal";
import Dropdown from "@components/Dropdown/Dropdown";
import moment from "moment";

interface HistoricSectionProps {
    historic: Historic
    renderSwitch: boolean
    daysFilter: number
    setDaysFilter: React.Dispatch<React.SetStateAction<number>>
    setRenderSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
export default function HistoricSection(props: HistoricSectionProps) {

    const [historyFilter, setHistoryFilter] = useState("all");
    const [showEdit, setShowEdit] = useState(false);
    const [editEntry, setEditEntry] = useState<Entry>(new Entry(0, "", 0, "", "", new Date(), "", ""));
    const [lastEntries, setLastEntries] = useState<Historic>(new Historic(0, 0, 0, []));

    useEffect(() => {
        setLastEntries(getLastEntryes(props.historic))
        
    }, [props.renderSwitch])

    useEffect(() => {
        setLastEntries(getLastEntryes(props.historic))
    }, [props.daysFilter])

    const edit = (entry: Entry) => {
        setEditEntry(entry)
        setShowEdit(true)
    }

    const getLastEntryes = (historic :Historic) => {
        let lastEntries: Historic = new Historic(0, 0, 0, []);
        let limitDate = new Date(Date.now() - (1000 * 60 * 60 * 24 * props.daysFilter));
        let safeIndex;

        if (props.daysFilter > historic.dayEntryes.length) {
            safeIndex = historic.dayEntryes.length;
        } else {
            safeIndex = props.daysFilter;
        }
        for (let i = 0; i < safeIndex; i++) {
            if (historic.dayEntryes[i].date >= limitDate) {
                lastEntries.addDayEntry(historic.dayEntryes[i]);
            }
        }
        return lastEntries;
    }

    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const getDaysRange = () => {
        let limitDate = new Date(Date.now() - (1000 * 60 * 60 * 24 * props.daysFilter));
        let limitDay = limitDate.getDate();
        let limitMonth = limitDate.getMonth();

        let actualDay = new Date().getDate();
        let actualMonth = new Date().getMonth();

        return limitDay + " " + monthNames[limitMonth] + " - " + actualDay + " " + monthNames[actualMonth];
    }

    return (
        <HistoryBox>
            <DayFilter>

                <Dropdown setDaysFilter={props.setDaysFilter} daysFilter={props.daysFilter}></Dropdown>
                <DaysFilterText textColor={theme.COLORS.DISABLE}>
                    {getDaysRange()}
                </DaysFilterText>

            </DayFilter>

            <TimeResume>
                <TimeResumeBox>
                    <Image width={48} height={48} source={require("@assets/icons/Income.png")} />
                    <TimeResumeInfo>
                        <TimeResumeTitle>Receita</TimeResumeTitle>
                        <TimeResumeValue fontSize={lastEntries.income <= 999999 ? "17px" : "13px" }>R${lastEntries.income.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TimeResumeValue>
                    </TimeResumeInfo>
                </TimeResumeBox>
                <TimeResumeBox>
                    <Image width={48} height={48} source={require("@assets/icons/Spending.png")} />
                    <TimeResumeInfo>
                        <TimeResumeTitle>Despesa</TimeResumeTitle>
                        <TimeResumeValue fontSize={lastEntries.expense <= 999999 ? "17px" : "13px" }>R${lastEntries.expense.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TimeResumeValue>
                    </TimeResumeInfo>
                </TimeResumeBox>
            </TimeResume>
            <FilterButtons>
                <FilterButton
                    bgColor={
                        historyFilter === "all" ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY}
                    onPress={() => { setHistoryFilter("all") }}>
                    <FilterText
                        textColor={historyFilter === "all" ?
                            theme.COLORS.WHITE : theme.COLORS.PRIMARY}>
                        Tudo</FilterText>
                </FilterButton>
                <FilterButton
                    title="Receita"
                    bgColor={
                        historyFilter === "receita" ? theme.COLORS.INCOME : theme.COLORS.SECONDARY}
                    onPress={() => { setHistoryFilter("receita") }}>
                    <FilterText
                        textColor={historyFilter === "receita" ?
                            theme.COLORS.WHITE : theme.COLORS.PRIMARY}>
                        Receita</FilterText>
                </FilterButton>
                <FilterButton
                    title="Despesa"
                    bgColor={
                        historyFilter === "despesa" ? theme.COLORS.SPENDING : theme.COLORS.SECONDARY}
                    onPress={() => { setHistoryFilter("despesa") }}>
                    <FilterText
                        textColor={historyFilter === "despesa" ?
                            theme.COLORS.WHITE : theme.COLORS.PRIMARY}>
                        Despesa</FilterText>
                </FilterButton>
            </FilterButtons>

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <EntryRow>
                    {lastEntries && (lastEntries.dayEntryes.map((dayEntry) => {
                        return <View key={`entry-${dayEntry.date.getTime()}`}>
                            <HistoryHeader>
                                <DayTitle>{dayEntry.date.toLocaleDateString('pt-BR')}</DayTitle>

                                {historyFilter == "all" ? (
                                    <DayResume bgColor={dayEntry.balance >= 0 ? theme.COLORS.INCOME : theme.COLORS.SPENDING}>
                                        {dayEntry.balance >= 0 ? "+" : "-"} R$
                                        {Math.abs(dayEntry.balance).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                    </DayResume>
                                )
                                    : (historyFilter == "receita" ? (
                                        <DayResume bgColor={theme.COLORS.INCOME}>
                                            + R$
                                            {Math.abs(dayEntry.income).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                        </DayResume>
                                    )
                                        : (
                                            <DayResume bgColor={theme.COLORS.SPENDING}>
                                                - R$
                                                {Math.abs(dayEntry.expense).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                            </DayResume>
                                        ))
                                }

                            </HistoryHeader>
                            {dayEntry.entryes && dayEntry.entryes.map((entry) => {
                                return <View key={`entry-${entry.index}`}>
                                    {(historyFilter == "all" || historyFilter === entry.type) && (
                                        <Row>
                                            <TagIcon>
                                                <Image width={36} height={36} source={require("@assets/icons/tagIcon.png")} />
                                            </TagIcon>
                                            <RowInfo onPress={() => edit(entry)}>
                                                <RowDescription key={`entry-${entry.time}`}>
                                                    <RowPaymentText>{entry.payment}</RowPaymentText>
                                                    <RowDescriptionText>{entry.description}</RowDescriptionText>
                                                </RowDescription>
                                                <RowValues>
                                                    <RowTimeText> {moment(entry.time).format("HH:mm")}</RowTimeText>
                                                    <RowValueText color={entry.type === "receita" ? theme.COLORS.INCOME : theme.COLORS.SPENDING}>
                                                        {entry.type === "receita" ? "+" : "-"} R$
                                                        {Math.abs(entry.value).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                                    </RowValueText>
                                                </RowValues>
                                            </RowInfo>
                                        </Row>
                                    )}
                                </View>
                            })}
                        </View>
                    }))}
                </EntryRow>
                <EditEntryModal
                    showModal={showEdit}
                    setShowModal={setShowEdit}
                    editEntry={editEntry}
                    setEditEntry={setEditEntry}
                    renderSwitch={props.renderSwitch}
                    setRenderSwitch={props.setRenderSwitch}
                    historic={props.historic}
                >
                </EditEntryModal>

            </ScrollView >
        </HistoryBox>
    )
}