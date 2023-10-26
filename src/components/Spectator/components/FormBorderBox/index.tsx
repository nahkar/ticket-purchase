import { FormBorderBox__Wrapper, FormBorderBox__Label, FormBorderBox__ClearBtn } from './styled';
import eraseIcon from '~assets/erase-icon.svg';

type PropsT = {
	children: React.ReactNode;
	label: string;
	onClear?: () => void;
};

export const FormBorderBox = ({ children, label, onClear }: PropsT) => {
	return (
		<FormBorderBox__Wrapper>
			<FormBorderBox__Label>{label}</FormBorderBox__Label>
			{onClear && (
				<FormBorderBox__ClearBtn onClick={onClear}>
					Clear <img src={eraseIcon} alt='clear' />
				</FormBorderBox__ClearBtn>
			)}
			{children}
		</FormBorderBox__Wrapper>
	);
};
