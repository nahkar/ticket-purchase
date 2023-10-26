import { Outlet } from 'react-router-dom';
import { Header } from '~components/Header';
import { MainWideLayout__Wrapper } from './styled';

export const MainWideLayout = () => {
	return (
		<>
			<Header />
			<MainWideLayout__Wrapper>
				<Outlet />
			</MainWideLayout__Wrapper>
		</>
	);
};
