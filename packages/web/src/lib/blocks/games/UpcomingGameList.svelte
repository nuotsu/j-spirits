<section class="max-w-screen-lg mx-auto p-4">
	<HTag class="h2" {...heading} />

	<div class="list">
		{#each upcomingGames as game}
			<Game {...game} />
		{/each}
	</div>

	{#if cta}
		<p class="text-center mt-8">
			<CTA className="px-4" {...cta} />
		</p>
	{/if}
</section>

<style>
	.list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>

<script>
	import { page } from '$app/stores'
	import HTag from '~/lib/HTag.svelte'
	import Game from './Game.svelte'
	import CTA from '~/lib/CTA.svelte'

	export let heading, cta

	let { upcomingGames } = $page.stuff
</script>
