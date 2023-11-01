import { ImageProps } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

// Body

export const AddEntryForm = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.MODAL_BACKGROUND};
  width: 90%;
  border-radius: 10px;
  padding: 10px 15px 20px 15px;
`;

export const RadioButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const RadioButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  gap: 10px;
`;

export const ImageStyle = styled.Image<ImageProps>`
  width: 20px;
  height: 20px;
`;

export const RadioButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 16px;
  text-transform: capitalize;
`;

export const InputSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 13px 0px;
  width: 100%;
`;

export const DateInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputSectionDate = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 13px 0px;
  width: 45%;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOREGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 13px;
`;

export const TextInputStyled = styled.TextInput`
    color: ${({ theme }) => theme.COLORS.DEFAULT};
    font-size: 16px;
    width: 100%;
    font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
    text-align: left;
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.DISABLE};
    border-radius: 5px;
`;

export const TextInputDate = styled.TextInput`
    color: ${({ theme }) => theme.COLORS.DEFAULT};
    font-size: 16px;
    width: 100%;
    font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
    text-align: left;
    padding: 5px 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.DISABLE};
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    padding: 14px;
    margin-top: 20px;
    background-color: ${props => props.bgColor};
    border-radius: 5px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
    color: ${props => props.textColor};
    font-size: 16px;
    text-align: center;
`;

export const LogoutButton = styled.TouchableOpacity`
    margin: 100px;
    padding: 20px;
`;