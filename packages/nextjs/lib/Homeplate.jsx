import { RiHomeFill } from 'react-icons/ri'
import clsx from 'clsx'

const Homeplate = ({ className }) => (
	<RiHomeFill className={clsx(className, 'transform -scale-y-100')} />
)

export default Homeplate
