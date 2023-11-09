import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageProps } from "react-native";
import styled from "styled-components/native";

export const SafeAreaViewStyled = styled(SafeAreaView)`
position: relative;
top: 20px;
`;

export const Container = styled.View`
flex: 1;
`;

export const HelpButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 10px;
`;

export const HelpButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.CLOUD};
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
  padding: 15px;
  height: 45%;
`;

export const AddButtonView = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  margin: auto;
  /* position: relative;
  top: 20px; */
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
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding: 10px;
  text-shadow: 0px 2px 4px rgba(255, 255, 255, 0.25);
  /* position: relative;
  top: 20px; */
`;

export const TotalBalance = styled.Text`
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

export const HistoricView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -7%;
  height: 62%;
`;
