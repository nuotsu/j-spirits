import css from './Toggle.module.css'
import t from 'utils/locale'
import { IoIosBaseball } from 'react-icons/io'
import clsx from 'clsx'

const Toggle = ({ state }) => {
	const [$open, set$open] = state

	return (
		<button
			className={clsx(css.button, $open && css.open)}
			onClick={() => set$open(!$open)}
			title={t({
				en: 'Toggle menu',
				ja: $open ? 'メニューを閉じる' : 'メニューを開く'
			})}
		>
			<IoIosBaseball className={css.icon} />
		</button>
	)
}

export default Toggle
