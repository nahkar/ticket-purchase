import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Stepper__Completed, Stepper__Current, Stepper__Icompleted, Stepper__Wrapper } from './styled';
import DoneIcon from '@mui/icons-material/Done';

type PropsT = {
	activeStep: number;
};

const QontoConnector = styled(StepConnector)(() => ({
	[`& .${stepConnectorClasses.line}`]: {
		borderColor: 'rgba(145, 158, 171, 0.24)',
		borderTopWidth: 1,
		borderRadius: 1,
	},
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(() => ({
	display: 'flex',
	height: 22,
	alignItems: 'center',
}));

function QontoStepIcon(props: StepIconProps, activeStep: number) {
	const { active, className, icon } = props;
	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{activeStep === icon && <Stepper__Current>{icon}</Stepper__Current>}
			{activeStep > Number(icon) && (
				<Stepper__Completed>
					<DoneIcon />
				</Stepper__Completed>
			)}
			{activeStep < Number(icon) && <Stepper__Icompleted>{icon}</Stepper__Icompleted>}
		</QontoStepIconRoot>
	);
}

const steps = ['Purchaser', 'Spectator', 'Other', 'Payment'];

export const Steps = ({ activeStep }: PropsT) => {
	return (
		<Stepper__Wrapper>
			<Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={(props) => QontoStepIcon(props, activeStep)}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Stepper__Wrapper>
	);
};
