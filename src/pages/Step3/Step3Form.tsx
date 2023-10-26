import { MenuItem, Select } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form__Row, Form__TextField, Form__Wrapper, Shadow__Box } from '~styles/shared';
import { Step3Form__Title, Step3Form__Wrapper } from './styledForm';

type Inputs = {
	text1: string;
	text2: string;
	select1: string;
	select2: string;
};

export const Step3Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Step3Form__Wrapper>
			<Step3Form__Title>Additional questions</Step3Form__Title>
			<Form__Wrapper noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} $mb={64}>
				<Shadow__Box>
					<Form__Row $mb={16}>
						<Form__TextField
							fullWidth
							sx={{ maxWidth: 608, marginX: 'auto' }}
							label='Text'
							{...register('text1', { required: true })}
							$width={324}
						/>
						{errors.text1 && <span>This field is required</span>}
					</Form__Row>
					<Form__Row $mb={16}>
						<Form__TextField
							fullWidth
							sx={{ maxWidth: 608, marginX: 'auto' }}
							label='Text'
							{...register('text2')}
							$width={324}
						/>
						{errors.text2 && <span>This field is required</span>}
					</Form__Row>
					<Form__Row $mb={16}>
						<Select fullWidth sx={{ maxWidth: 608, marginX: 'auto' }} {...register('select1')}>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
						{errors.select1 && <span>This field is required</span>}
					</Form__Row>
					<Form__Row $mb={16}>
						<Select fullWidth sx={{ maxWidth: 608, marginX: 'auto' }} {...register('select2')}>
							<MenuItem value={40}>Fourty</MenuItem>
							<MenuItem value={50}>Fifty</MenuItem>
							<MenuItem value={60}>Sixty</MenuItem>
						</Select>
						{errors.select2 && <span>This field is required</span>}
					</Form__Row>
				</Shadow__Box>
			</Form__Wrapper>
		</Step3Form__Wrapper>
	);
};
