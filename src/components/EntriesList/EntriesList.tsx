import { ScrollView } from "react-native"
import { DayResume, DayTitle, DeleteIcon, DeleteSection, EntryRow, FilterButton, FilterButtons, FilterText, HistoryHeader, Row, RowDescription, RowDescriptionText, RowInfo, RowPaymentText, RowTimeText, RowValueText, RowValues, TagIcon } from "./styles"
import { View, Image } from "react-native";
import { Historic } from "@models/Historic";
import { useState } from "react";
import theme from "@styles/theme";
import { Entry } from "@models/Entry";
import EditEntryModal from "@components/Modals/EditEntryModal/EditEntryModal";

interface EntriesListProps {
    historic: Historic
    lastEntryes: Historic
    renderSwitch: boolean
    setRenderSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
export default function EntriesList(props: EntriesListProps) {

    const [historyFilter, setHistoryFilter] = useState("all");
    const [showEdit, setShowEdit] = useState(false);
    const [editEntry, setEditEntry] = useState<Entry>(new Entry(0, "", 0, "", "", new Date(), "", ""));

    const captalizeFirstLetter = (string: string) => {
        if (!string) return "";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const edit = (entry: Entry) => {
        setEditEntry(entry)
        setShowEdit(true)
    }

    return (
        <>
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
                    {props.lastEntryes && (props.lastEntryes.dayEntryes.map((dayEntry) => {
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
                                                    <RowPaymentText>{captalizeFirstLetter(entry.payment)}</RowPaymentText>
                                                    <RowDescriptionText>{captalizeFirstLetter(entry.description)}</RowDescriptionText>
                                                </RowDescription>
                                                <RowValues>
                                                    <RowTimeText> {entry.time.toLocaleTimeString("pt-BR")}</RowTimeText>
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
            </ScrollView>
        </>
    )
}