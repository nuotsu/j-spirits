<section class="max-w-screen-xl mx-auto p-4 text-center">
	<div class="inner j-gradient">
		<HTag class="heading" {...heading} />
	</div>
</section>

<style>
	.inner {
		display: grid;
		place-content: center;
		padding: 2rem;
		height: clamp(200px, 50vh, 400px);

		@apply rounded-xl;
	}

	.inner :global(.heading) {
		max-width: 365px;
		text-shadow: 3px 3px theme('colors.j-green-dark');

		@apply mx-auto font-bold text-4xl <md:text-2xl leading-snug;
	}
</style>

<script>
	import HTag from '~/lib/HTag.svelte'

	export let heading
</script>
