export const getMbOfEventCard = (path: string) => {
	console.log(123, path);
	
	if(path === '/purchase-admission-information'){
		return 40;
	}
	if(path.includes('step-')){
		return 75;
	}
	if(path.includes('/ticket/')){
		return 48;
	}
	return 72;
}