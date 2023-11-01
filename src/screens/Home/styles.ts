import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageProps } from "react-native";
import styled from "styled-components/native";

export const SafeAreaViewStyled = styled(SafeAreaView)`
`;

export const Container = styled.View`
flex: 1;
`;

export const HelpButton = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  right: 0;
`;

export const HelpButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

// Header

export const LinearGradientStyled = styled(LinearGradient).attrs({
  style: {
    transition: "all 0.5s ease"
  }
})`
`

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-bottom: 100px;
`;

export const HeaderButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position : relative;
  top: 20px;
`;

export const AddButtonView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MicrophoneButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  margin: auto;
  background-color: ${props => props.bgColor};
`;

export const AddButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

export const AddButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 30px;
  text-align: center;
  position: relative;
  top: -2px;
`;

export const MicrophoneImage = styled.Image<ImageProps>`
  width: 50px;
  height: 50px;
  `;

export const HearingTitle = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  text-shadow: 0px 2px 4px rgba(255, 255, 255, 0.25);
`;

export const TotalBalance = styled.Text`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
  color: ${props =>
    props.balance < 0 ? "#dda8a8" : "#A9DDA8"};
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  text-align: center;
  font-size: 32px;
  color: white;
  font-family: ${({ theme }) => theme.FONTS.IBMPLEXSANSSEMIBOLD};
`;

// Body

export const ContentBody = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};
`;

export const HistoryBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 90%;
  height: 79%;
  position: relative;
  top: -60px;
  border-radius: 12px;
  padding: 12px 16px;
`;


export const DayFilter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownButton = styled.TouchableOpacity`
  padding: 500px;
`;

export const FilterText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.DISABLE};
  text-align: center;
`;

export const TimeResume = styled.View`
  display: flex;
  flex-direction: row;
  padding : 10px 15px 15px;
  justify-content: space-between;
`;

export const TimeResumeBox = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TimeResumeInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TimeResumeTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOSEMIBOLD};
  color: ${({ theme }) => theme.COLORS.DISABLE};
  font-size: 13px;
`;

export const TimeResumeValue = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.IBMPLEXSANSSEMIBOLD};
  color: ${({ theme }) => theme.COLORS.DEFAULT};
  font-size: 17px;
`;
