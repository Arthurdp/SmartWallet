import { ImageProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;

// Header

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const LogoImg = styled.Image<ImageProps>`
    position: relative;
    left: 14px;
    width: 105px;
    height: 96px;
`;

export const TitleText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOBLACK};
    font-size: 30px;
    padding-top: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

// Body

export const ContentBody = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -50px;
`;

export const RegisterForm = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 90%;
  border-radius: 10px;
`;

export const InputSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 12px;
  width: 100%;
`;

export const TextInputStyled = styled.TextInput`
    color: ${({ theme }) => theme.COLORS.DEFAULT};
    font-size: 18px;
    width: 85%;
    font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
`;

export const BottomBar = styled.View`
  height: 1px;
  width: 93%;
  margin: 1px;
  background-color: ${({ theme }) => theme.COLORS.SEPARATOR};
  border-radius: 10px;
`;

//Footer

export const ContentFooter = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 82px;
`;

export const LoginButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
    padding: 14px 40px;
    background-color: ${ props => props.bgColor };
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
    color: ${ props => props.textColor };
    font-size: 16px;
`;