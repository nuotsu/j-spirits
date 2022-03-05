<img {src} {alt} {width} {height} loading="lazy" {...props}>

<script>
	import { urlFor } from '~/utils/sanity'

	let {
		image,
		builder = () => {},
		alt = '',
		...props
	} = $$props

	let src = (builder(urlFor(image)) || urlFor(image))
		.auto('format')
		.url()

	let { w, h } = src.match(/(?<w>\d+)x(?<h>\d+)/)?.groups

	let params = new URLSearchParams(new URL(src).search)

	let width = params.get('w') || Math.round(w / h * params.get('h')) || w
	let height = params.get('h') || Math.round(h / w * params.get('w')) || h
</script>
