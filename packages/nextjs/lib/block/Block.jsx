import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('./form/ContactForm'))
const ContentBox = dynamic(() => import('./ContentBox'))
const GameList = dynamic(() => import('./game/GameList'))
const GameListCompact = dynamic(() => import('./game/GameListCompact'))
const HeroHome = dynamic(() => import('./HeroHome'))
const NewsList = dynamic(() => import('./NewsList'))
const Roster = dynamic(() => import('./roster/Roster'))
const UpcomingGameList = dynamic(() => import('./game/UpcomingGameList'))

const Block = ({ _type, ...props }) => {
	switch (_type) {
		case 'contactForm': return <ContactForm {...props} />
		case 'contentBox': return <ContentBox {...props} />
		case 'gameList': return <GameList {...props} />
		case 'gameListCompact': return <GameListCompact {...props} />
		case 'heroHome': return <HeroHome {...props} />
		case 'newsList': return <NewsList {...props} />
		case 'roster': return <Roster {...props} />
		case 'upcomingGameList': return <UpcomingGameList {...props} />
		default: return <pre>{_type}</pre>
	}
}

export default Block
