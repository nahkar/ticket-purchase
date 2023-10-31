import { useForm, SubmitHandler } from 'react-hook-form';
import { Form__Row, Form__TextField, Form__Wrapper } from '~styles/shared';

type Inputs = {
	first_name: string;
	last_name: string;
	gender: string;
	gradeYear: string;
};

export const CollegeProposalForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


	return (
		<>
			<Form__Wrapper noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} $mb={36} style={{maxWidth: '650px', margin: '0 0 23px 40px'}}>
				<Form__Row $mb={16}>
					<Form__TextField label='Athlete First name'  {...register('first_name')} $width={294}/>
					<Form__TextField label='Athlete Last name'  {...register('last_name', { required: true })} $width={294} />
				</Form__Row>
				<Form__Row $mb={16}>
					<Form__TextField label='Gender'  {...register('gender')}  $width={294} />
					<Form__TextField label='High school grade year'  {...register('gradeYear')}  $width={294} />
				</Form__Row>
				{errors.last_name && <span>This field is required</span>}
			</Form__Wrapper>
		</>
	);
};
// max-width: 650px;
// margin: 0 0 23px 40px;