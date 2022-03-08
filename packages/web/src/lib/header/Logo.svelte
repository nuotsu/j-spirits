<a class="relative inline-block pt-4 px-4 bg-white <sm:mb-8 drop-shadow-sm" {href}>
	<DarkLogo class="<md:h-[30px]" height={60} />
</a>

<style>
	a::after {
		content: '';
		position: absolute;
		left: 0;
		top: 100%;
		display: block;
		width: 100%;
		height: 2rem;
		background-color: #fff;
		clip-path: polygon(0 0, 100% 0, 50% 100%);
	}
</style>

<script>
	import DarkLogo from '~/lib/logo/Dark.svelte'
	import { page } from '$app/stores'

	let href = `/${ $page.params.lang || '' }`
</script>
