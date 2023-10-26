import { create } from 'zustand';

export interface IProfile {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	clearMessageError: () => void;
}

const initStore = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
};

export const useProfileStore = create<IProfile>((set) => ({
	...initStore,
	clearMessageError: () => {
		set({ phoneNumber: '' });
	},
}));
