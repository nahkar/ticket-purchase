import { Overlay__Wrapper } from "./styled"

type PropsT = {
	clickHandler: () => void
}
export const Overlay = ({clickHandler}: PropsT) => {
	return <Overlay__Wrapper onClick={clickHandler}/>
}