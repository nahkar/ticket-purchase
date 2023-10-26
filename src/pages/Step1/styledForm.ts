import { MuiTelInput } from 'mui-tel-input';
import styled from 'styled-components';

export const Step1Form__PhoneField = styled(MuiTelInput)`
	width: 324px;
`;

export const Step1Form__Description = styled.div`
	font-size: 12px;
	line-height: 18px;
	color: ${(props) => props.theme.light.colors.text.secondary};
`;
