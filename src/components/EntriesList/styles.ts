import { ImageProps } from 'react-native';
import styled from "styled-components/native";

export const FilterButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 10px 0px;
`;

export const FilterButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 9px 18px;
  border-radius: 100px;
`;

export const FilterText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
  color: ${props => props.textColor};
  font-size: 17px;
`;

export const HistoryHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  justify-content: space-between;
`;

export const DayTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
  color: ${({ theme }) => theme.COLORS.DISABLE};
  font-size: 15px;
`;

export const DayResume = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.IBMPLEXSANSSEMIBOLD};
  background-color: ${props => props.bgColor};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1px 5px 0px 5px;
  border-radius: 100px;
  font-size: 11px;
`;

export const EntryRow = styled.View`
  display: flex;
  flex-direction: column;
  
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`;

export const RowInfo = styled.TouchableOpacity`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
`;

export const RowDescription = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const RowValues = styled.View`
  display: flex;
  flex-direction: column;
  /* position: relative;
  left : 32px */
`;

export const TagIcon = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  width: 36px;
  height: 36px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const RowPaymentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.DISABLE};
  font-size: 13px;
`;

export const RowDescriptionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.DEFAULT};
  font-size: 15px;
  font-family: ${({ theme }) => theme.FONTS.NUNITOSEMIBOLD};
`;

export const RowTimeText = styled.Text`
  color: ${({ theme }) => theme.COLORS.DISABLE};
  font-family: ${({ theme }) => theme.FONTS.IBMPLEXSANSSEMIBOLD};
  font-size: 11px;
  align-self: flex-end;
`;

export const RowValueText = styled.Text`
  color : ${props => props.color};
  font-family: ${({ theme }) => theme.FONTS.IBMPLEXSANSSEMIBOLD};
  font-size: 16px;
  align-self: flex-end;
`;

export const DeleteSection = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteIcon = styled.Image<ImageProps>`
  width: 20px;
  height: 20px;
`;
