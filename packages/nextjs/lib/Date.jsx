import t from 'utils/locales'
import dateformat from 'dateformat'

const Date = ({ date }) => (
	<time className="uppercase text-sm" dateTime={date}>
		{t({
			en: dateformat(date, 'mmm d', true),
			ja: dateformat(date, 'm月d日', true)
		})}
	</time>
)

export default Date
