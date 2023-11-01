import { ImageProps } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;
export const Box = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.MODAL_BACKGROUND};
  width: 90%;
  height: 50%;
  border-radius: 10px;
  padding: 10px 15px 20px 15px;
`;

// Body

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 25px;
  text-align: center;
`;

export const TitleInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 16px;
  padding: 10px;
  text-align: justify;
`;

export const Topic = styled.Text`
font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: 16px;
  text-align: justify;
  padding: 4px;
`;

export const TopicInfo = styled.Text`
font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
  color: ${ props => props.textColor };
  font-size: 16px;
  padding: 2px;
  text-align: justify;
  font-size: 16px;
  padding: 2px;
  text-align: justify;
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