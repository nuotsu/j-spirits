<section class="max-w-screen-xl mx-auto p-4 text-center">
	<div class="inner j-gradient">
		<h1>{$t(heading)}</h1>
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

	h1 {
		max-width: 365px;

		@apply mx-auto font-bold text-4xl <md:text-2xl leading-snug;
	}
</style>

<script>
	import { t } from '~/utils/locales'

	export let heading
</script>
