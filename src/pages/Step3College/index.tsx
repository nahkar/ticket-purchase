import { EventCard } from '~components/EventCard';
import { Steps } from '~components/Stepper';
import { ButtonsForm } from '~components/ButtonsForm';
import { CollegeProposal } from '~components/CollegeProposal';
import { useState } from 'react';
import { IsCollegeT } from '~interfaces/college.type';

export const Step3College = () => {
	const [isCollege, setIsCollege] = useState<IsCollegeT>(null);
	
	return (
		<>
			<EventCard />
			<Steps activeStep={3} />
			<CollegeProposal setIsCollege={setIsCollege} isCollege={isCollege}/>
			<ButtonsForm isContinueDisable={!isCollege}/>
		</>
	);
};
