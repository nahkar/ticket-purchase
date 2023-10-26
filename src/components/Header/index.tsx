import { Link } from 'react-router-dom';
import { Header__Logo, Header__Wrapper } from './styled';
import logo from '~assets/logo.svg';

export const Header = () => {
	return (
		<Header__Wrapper>
			<Link to='/'>
				<Header__Logo src={logo} alt='SportWrench' />
			</Link>
		</Header__Wrapper>
	);
};
