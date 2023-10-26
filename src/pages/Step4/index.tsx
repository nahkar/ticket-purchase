import { EventCard } from '~components/EventCard';
import { Steps } from '~components/Stepper';
import { ButtonsForm } from '~components/ButtonsForm';
import { Payment } from '~components/Payment';

export const Step4 = () => {
	const countPrice = '64';
	return (
		<>
			<EventCard />
			<Steps activeStep={4} />
			<Payment />
			<ButtonsForm continueLabel={`Pay $${parseFloat(countPrice).toFixed(2)}`} />
		</>
	);
};
