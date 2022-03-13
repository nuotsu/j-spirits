<a {href} class="{className} {style}" {...external}>
	{label}
</a>

<script>
	import { t, t_url } from '~/utils/locales'

	export let link, style, className = ''

	$: href =
		link._type === 'internalLink' ? $t_url(link.internalUrl) :
		link._type === 'externalLink' ? link.url :
		null

	$: label = $t(link.label || link.page.title)

	$: external = link._type === 'externalLink'
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {}
</script>
