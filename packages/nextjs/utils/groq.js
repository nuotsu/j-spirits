const menu = `
	...,
	link->{
		title,
		'url': select(slug.current == '/' => '/', '/' + slug.current),
	}
`

const internalLink = `
	'internalUrl': '/' + link->slug.current,
	'page': link->{title},
	label
`

const cta = `
	link[0]{
		_type,
		url,
		${internalLink}
	},
	style
`

const global = `
	'site': *[_type == 'site'][0],
	'header': *[_type == 'header'][0]{
		menu[]{ ${menu} }
	},
	'footer': *[_type == 'footer'][0]{
		menu[]{ ${menu} }
	},
	'news': *[_type == 'news']|order(date desc),
	'games': *[_type == 'game' && status == 'completed']|order(date desc){
		...,
		opponent->{name}
	},
	'upcomingGames': *[_type == 'game' && status == 'upcoming']|order(date asc){
		...,
		opponent->{name}
	},
	'roster': *[_type == 'player']|order(jersey asc),
	'teams': *[_type == 'team']|order(name.full asc)
`

export default {
	internalLink,
	cta,
	global,
}
