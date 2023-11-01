import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`;


// Header

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: 20px;
`;

export const HeaderButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOMEDIUM};
    font-size: 16px;
`;

export const TitleText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
    padding: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
// Body

export const ContentBody = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditAccountForm = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 90%;
  border-radius: 10px;
  padding: 10px 15px 20px 15px;
`;

export const InputSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 13px 0px;
  width: 100%;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.NUNITOREGULAR};
  color: ${({ theme }) => theme.COLORS.DISABLE};
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

export const Button = styled.TouchableOpacity`
    padding: 14px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 5px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.NUNITOBOLD};
    color: ${ props => props.textColor };
    font-size: 16px;
    text-align: center;
`;

export const LogoutButton = styled.TouchableOpacity`
    margin: 100px;
    padding: 20px;
`;