import {
	Payment__Aside,
	Payment__CardIconsWrapper,
	Payment__CardholderCheckedWrapper,
	Payment__CardholderInformationWrapper,
	Payment__CardholderItem,
	Payment__CardholderList,
	Payment__CardholderTitle,
	Payment__CardholderWrapper,
	Payment__Inner,
	Payment__Main,
	Payment__OrderSummaryEditBtn,
	Payment__OrderSummaryItem,
	Payment__OrderSummaryList,
	Payment__OrderAsideRow,
	Payment__OrderAsideTitle,
	Payment__OrderSummaryWrapper,
	Payment__OrderTotalPrice,
	Payment__OrderTotalWrapper,
	Payment__Wrapper,
	Payment__OrderSummaryOrder,
	Payment__OrderSummaryName,
} from './styled';
import cardIcon from '~assets/card-icon.svg';
import appleIcon from '~assets/apple-icon.svg';
import googleIcon from '~assets/google-icon.svg';
import checkedIcon from '~assets/payment-checked-icon.svg';
import visaIcon from '~assets/visa-icon.svg';
import discoverIcon from '~assets/discover-icon.svg';
import mastercardIcon from '~assets/mastercard-icon.svg';
import americanExpressIcon from '~assets/american-express-icon.svg';
import editicon from '~assets/edit-icon.svg';

import { ChangeEvent, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonStyled, Form__Row, Form__TextField, Form__Wrapper } from '~styles/shared';
import { EditOrderModal } from './EditOrderModal';

type CardHolderT = 'card' | 'apple' | 'google' | null;
type Inputs = {
	name: string;
	surname: string;
	zip: string;
	cardNumber: string;
	cvv: string;
	email: string;
};

export const Payment = () => {
	const [isShowEditOrderModal, setIsShowEditOrderModal] = useState(false);
	const closeEditOrderModal = useCallback(() => {
		setIsShowEditOrderModal(false);
	}, [isShowEditOrderModal, setIsShowEditOrderModal]);
	const [cardHolder, setCardHolder] = useState<CardHolderT>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	const checked = () => {
		return (
			<Payment__CardholderCheckedWrapper>
				<img src={checkedIcon} alt='checked' />
			</Payment__CardholderCheckedWrapper>
		);
	};
	const onChangeCardHolder = (value: CardHolderT) => {
		setCardHolder(value);
	};

	const [inputValue, setInputValue] = useState('');

	const onCardExpired = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const formattedValue = value.replace(/\D/g, '');
		const maxLength = 4;
		const truncatedValue = formattedValue.slice(0, maxLength);
		if (truncatedValue.length >= 2) {
			const month = truncatedValue.slice(0, 2);
			const year = truncatedValue.slice(2, 4);
			setInputValue(`${month}/${year}`);
		} else {
			setInputValue(truncatedValue);
		}
	};

	return (
		<>
			<Payment__Wrapper>
				<Payment__Main>
					<Payment__Inner>
						<Payment__CardholderWrapper>
							<Payment__CardholderTitle>Cardholder Information</Payment__CardholderTitle>
							<Payment__CardholderList>
								<Payment__CardholderItem $isChecked={cardHolder === 'card'}>
									{cardHolder === 'card' && checked()}
									<input
										type='radio'
										value='card'
										name='cardholder'
										onChange={(e) => onChangeCardHolder(e.target.value as CardHolderT)}
									/>
									<img src={cardIcon} alt='card' />
								</Payment__CardholderItem>
								<Payment__CardholderItem $isChecked={cardHolder === 'apple'}>
									{cardHolder === 'apple' && checked()}
									<input
										type='radio'
										value='apple'
										name='cardholder'
										onChange={(e) => onChangeCardHolder(e.target.value as CardHolderT)}
									/>
									<img src={appleIcon} alt='apple' />
								</Payment__CardholderItem>
								<Payment__CardholderItem $isChecked={cardHolder === 'google'}>
									{cardHolder === 'google' && checked()}
									<input
										type='radio'
										value='google'
										name='cardholder'
										onChange={(e) => onChangeCardHolder(e.target.value as CardHolderT)}
									/>
									<img src={googleIcon} alt='google' />
								</Payment__CardholderItem>
							</Payment__CardholderList>
						</Payment__CardholderWrapper>
						<Payment__CardholderInformationWrapper>
							<Payment__CardholderTitle>Cardholder Information</Payment__CardholderTitle>
							<Form__Wrapper noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} $mb={64}>
								<Form__Row $mb={24}>
									<Form__TextField label='Name' {...register('name', { required: true })} $width={240} />
									<Form__TextField label='Surname' {...register('surname')} $width={240} />
								</Form__Row>
								<Form__Row $mb={24}>
									<Form__TextField fullWidth label='Zip' {...register('zip')} $width={496} />
									{errors.zip && <span>This field is required</span>}
								</Form__Row>
								<Payment__CardholderTitle>Card Information</Payment__CardholderTitle>
								<Form__Row $mb={24}>
									<Form__TextField fullWidth label='Card number' {...register('cardNumber')} $width={496} />
									{errors.cardNumber && <span>This field is required</span>}
								</Form__Row>
								<Form__Row $mb={16}>
									<Form__TextField label='MM/YY' onChange={onCardExpired} value={inputValue} $width={240} />
									<Form__TextField label='CVV' {...register('cvv', { required: true, minLength: 3, maxLength: 3 })}  $width={240} />
								</Form__Row>
								<Form__Row $mb={64}>
									<Payment__CardIconsWrapper>
										<img src={visaIcon} alt='visa' />
										<img src={discoverIcon} alt='discover' />
										<img src={mastercardIcon} alt='mastercard' />
										<img src={americanExpressIcon} alt='americanExpress' />
									</Payment__CardIconsWrapper>
								</Form__Row>
								<Payment__CardholderTitle>Email tickets to</Payment__CardholderTitle>
								<Form__Row>
									<Form__TextField fullWidth label='Email' {...register('email')} $width={496} />
									{errors.email && <span>This field is required</span>}
								</Form__Row>
							</Form__Wrapper>
						</Payment__CardholderInformationWrapper>
					</Payment__Inner>
				</Payment__Main>
				<Payment__Aside>
					<ButtonStyled variant='contained' color='primary' sx={{ width: '339px', margin: '0 auto 25px' }}>
						Place order
					</ButtonStyled>
					<Payment__OrderSummaryWrapper>
						<Payment__OrderAsideRow>
							<Payment__OrderAsideTitle>Order Summary</Payment__OrderAsideTitle>
							<Payment__OrderSummaryEditBtn onClick={() => setIsShowEditOrderModal(true)}>
								<img src={editicon} alt='edit' />
								Edit
							</Payment__OrderSummaryEditBtn>
						</Payment__OrderAsideRow>
						<Payment__OrderSummaryList>
							<Payment__OrderSummaryItem>
								<Payment__OrderSummaryName>John Smirth </Payment__OrderSummaryName>
								<Payment__OrderSummaryOrder>2 Daily Pass x$15.00</Payment__OrderSummaryOrder>
							</Payment__OrderSummaryItem>
							<Payment__OrderSummaryItem>
								<Payment__OrderSummaryName>Jane Smith</Payment__OrderSummaryName>
								<Payment__OrderSummaryOrder>1 Weekly Pass x$30.00</Payment__OrderSummaryOrder>
							</Payment__OrderSummaryItem>
							<Payment__OrderSummaryItem>
								<Payment__OrderSummaryName>Merchant fee</Payment__OrderSummaryName>
								<Payment__OrderSummaryOrder>$4.00</Payment__OrderSummaryOrder>
							</Payment__OrderSummaryItem>
						</Payment__OrderSummaryList>
					</Payment__OrderSummaryWrapper>
					<Payment__OrderTotalWrapper>
							<Payment__OrderAsideTitle>Order Total:</Payment__OrderAsideTitle>
							<Payment__OrderTotalPrice>$64.00</Payment__OrderTotalPrice>
					</Payment__OrderTotalWrapper>
				</Payment__Aside>
			</Payment__Wrapper>
			<EditOrderModal isShow={isShowEditOrderModal} onClose={closeEditOrderModal} />
		</>
	);
};
