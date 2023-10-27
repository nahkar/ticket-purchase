import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '~layouts/MainLayout';
import { MainWideLayout } from '~layouts/MainWideLayout';
import { Order } from '~pages/Order';
import { Orders } from '~pages/Orders';
import { PaymentSuccess } from '~pages/PaymentSuccess';
import { PurchaseAdmissionInformation } from '~pages/PurchaseAdmissionInformation';
import { PurchaseCode } from '~pages/PurchaseCode';
import { Step1 } from '~pages/Step1';
import { Step2 } from '~pages/Step2';
import { Step3 } from '~pages/Step3';
import { Step3College } from '~pages/Step3College';
import { Step4 } from '~pages/Step4';
import { Ticket } from '~pages/Ticket';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<PurchaseAdmissionInformation />} />
				<Route path='purchase-admission-information' element={<PurchaseAdmissionInformation />} />
				<Route path='purchase-code' element={<PurchaseCode />} />
				<Route path='step-one' element={<Step1 />} />
				<Route path='step-two' element={<Step2 />} />
				<Route path='step-three' element={<Step3 />} />
				<Route path='step-three-college' element={<Step3College />} />
				<Route path='payment-success' element={<PaymentSuccess />} />
				<Route path='orders' element={<Orders />} />
				<Route path='orders/:id' element={<Order />} />
				<Route path='ticket/:id' element={<Ticket />} />
			</Route>
			<Route path='/' element={<MainWideLayout />}>
				<Route path='step-four' element={<Step4 />} />
			</Route>
		</Routes>
	);
};
