import dynamic from 'next/dynamic'

const GameListCompact = dynamic(() => import('./game/GameListCompact'))
const HeroHome = dynamic(() => import('./HeroHome'))

const Block = ({ _type, ...props }) => {
	switch (_type) {
		case 'gameListCompact': return <GameListCompact {...props} />
		case 'heroHome': return <HeroHome {...props} />
		default: return <pre>{_type}</pre>
	}
}

export default Block
