import { Outlet } from 'react-router-dom';
import { Header } from '~components/Header';
import { MainLayout__Wrapper } from './styled';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<MainLayout__Wrapper>
				<Outlet />
			</MainLayout__Wrapper>
		</>
	);
};
