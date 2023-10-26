export type TicketT = { id: string; title: string; count: number; price: number; subTitle: string; subTitle2?: string };
export type SpectatorT = {
	id: string;
	first_name: string;
	last_name: string;
	tickets: TicketT[];
};
