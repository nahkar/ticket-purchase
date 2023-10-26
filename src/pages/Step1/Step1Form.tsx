import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { Step1Form__Description, Step1Form__PhoneField } from './styledForm';
import { Form__Row, Form__TextField, Form__Wrapper } from '~styles/shared';

type Inputs = {
	first_name: string;
	last_name: string;
	email: string;
};

export const Step1Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	const [phone, setPhone] = useState('+18665324654');

	const handleChange = (newPhone: string) => {
		setPhone(newPhone);
	};

	return (
		<>
			<Form__Wrapper noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} $mb={88} $width={664}>
				<Form__Row $mb={40}>
					<Form__TextField label='First name' defaultValue='John' {...register('first_name')} $width={324}/>
					<Form__TextField label='Last name' defaultValue='Smith' {...register('last_name', { required: true })} $width={324} />
				</Form__Row>
				<Form__Row $mb={13}>
					<Form__TextField label='Email' defaultValue='johnsmith@gmail.com' {...register('email')}  $width={324} />
					<Step1Form__PhoneField label='Phone Number' value={phone} onChange={handleChange} />
				</Form__Row>
				{errors.last_name && <span>This field is required</span>}
				<Step1Form__Description>
					Privacy Statement: Your contact information will NEVER be given to a 3rd party. We will ONLY contact you
					regarding information about this ticket.
				</Step1Form__Description>
			</Form__Wrapper>
		</>
	);
};
