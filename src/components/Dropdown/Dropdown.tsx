import theme from "@styles/theme";
import SelectDropdown from "react-native-select-dropdown";
import { ArrowIcon } from "./styles";

interface DropdownProps {
    daysFilter: number
    setDaysFilter: React.Dispatch<React.SetStateAction<number>>
}
export default function Dropdown(props : DropdownProps){

    const daysFilterOptions = [7, 15, 30, 60, 90];

    return(
        <>
        <SelectDropdown
              data={daysFilterOptions}
              onSelect={(selectedItem, index) => {
                props.setDaysFilter(selectedItem);
              }}
              defaultButtonText={"Últimos " + props.daysFilter + " dias"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return "Últimos " + selectedItem + " dias";
              }}
              rowTextForSelection={(item, index) => {
                return item + " dias";
              }}
              buttonStyle={{
                width: 160,
                height: 30,
                backgroundColor: theme.COLORS.SECONDARY,
                borderRadius: 50
              }}
              buttonTextStyle={{
                color: theme.COLORS.PRIMARY,
                fontFamily: theme.FONTS.NUNITOBOLD,
                fontSize: 16
              }}
              dropdownStyle={{
                backgroundColor: theme.COLORS.SECONDARY,
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5,
              }}
              rowStyle={{
                  height: 40
              }}
              rowTextStyle={{
                  color: theme.COLORS.PRIMARY,
                  fontFamily: theme.FONTS.NUNITOBOLD,
                  fontSize: 16
              }}
              dropdownOverlayColor="transparent"
              statusBarTranslucent={true}
              renderDropdownIcon={isOpened => {
                return <ArrowIcon source={ isOpened ? require("@assets/icons/arrow-up.png") : require("@assets/icons/arrow-down.png") }></ArrowIcon>
              }}
              dropdownIconPosition={"right"}
            />
        </>
    )
}