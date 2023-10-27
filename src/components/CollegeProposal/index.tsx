import { Checkbox, FormGroup } from '@mui/material';
import {
	CollegeProposal__Box,
	CollegeProposal__CollegeContainer,
	CollegeProposal__Description,
	CollegeProposal__Title,
	CollegeProposal__Wrapper,
} from './styled';
import ncsaLogo from '~assets/ncsa-logo.svg';
import { Dispatch, SetStateAction } from 'react';
import { IsCollegeT } from '~interfaces/college.type';
import { useForm } from 'react-hook-form';
import { Form__Label } from '~styles/shared';

type Props = {
	setIsCollege: Dispatch<SetStateAction<IsCollegeT>>;
	isCollege: IsCollegeT;
};
type Inputs = {
	collegeYes: string;
	collegeNo: string;
};

export const CollegeProposal = ({ setIsCollege, isCollege }: Props) => {
	const { register } = useForm<Inputs>();

	return (
		<CollegeProposal__Wrapper>
			<CollegeProposal__Title>
				Does your child hope to get recruited and compete in sports in college?
			</CollegeProposal__Title>
			<CollegeProposal__Box>
				<FormGroup>
					<Form__Label
						control={
							<Checkbox
								{...register('collegeYes')}
								checked={isCollege === 'yes'}
								onChange={({ target: { checked } }) => setIsCollege(checked ? 'yes' : null)}
							/>
						}
						label='Yes, my child wants to compete in college!'
					/>
					<CollegeProposal__Description>
						By clicking “yes” and submitting, you agree to receive personalized follow-up and marketing messages from
						NCSA by email, phone and automated text. Consent is not a condition of purchase. Standard rates apply.
					</CollegeProposal__Description>
					<CollegeProposal__CollegeContainer>
						<header>
							<img src={ncsaLogo} alt='ncsa' />
							<p>
								We team with NCSA to help athletes with the dream of <br /> competing at the next level.
							</p>
						</header>
						<ul>
							<li>Receive a FREE assessment from an NCSA recruiting expert</li>
							<li>Have an NCSA recruiting expert verify your child’s player info for over 35,000 college coaches</li>
							<li>Receive a FREE recruiting game plan personalized to your abilities, wants and needs</li>
						</ul>
					</CollegeProposal__CollegeContainer>
					<Form__Label
						control={
							<Checkbox
								{...register('collegeNo')}
								checked={isCollege === 'no'}
								onChange={({ target: { checked } }) => setIsCollege(checked ? 'no' : null)}
							/>
						}
						label='No, thanks'
					/>
				</FormGroup>
			</CollegeProposal__Box>
		</CollegeProposal__Wrapper>
	);
};
