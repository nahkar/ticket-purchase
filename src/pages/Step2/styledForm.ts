import styled from 'styled-components';

export const Step2Form__Wrapper = styled.div<{$isModal?: boolean}>`
	margin-bottom: ${(props) => props.$isModal ? '64px' : '320px'};
`;
