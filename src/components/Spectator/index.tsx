import { FormBorderBox } from './components/FormBorderBox';
import { Spectator__DeleteBtn, Spectator__Footer, Spectator__Wrapper } from './styled';

type PropsT = {
	children: React.ReactNode;
	label: string;
	onClear?: () => void;
	onDelete?: () => void;
};

export const Spectator = ({ children, label, onClear, onDelete }: PropsT) => {
	return (
		<Spectator__Wrapper>
			<FormBorderBox label={label} onClear={onClear}>
				{children}
			</FormBorderBox>
			<Spectator__Footer>
				{onDelete && <Spectator__DeleteBtn onClick={onDelete}>Delete</Spectator__DeleteBtn>}
			</Spectator__Footer>
		</Spectator__Wrapper>
	);
};
