<a href="/{ $page.params.lang || '' }">
	<DarkLogo class="<md:h-[30px]" height={60} />
</a>

<style>
	a {
		position: relative;
		display: block;
		max-width: max-content;
		background: #fff;
		padding: 1rem 1rem 0;

		@apply drop-shadow-sm <sm:mb-4 <md:mx-auto;
	}

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
</script>
