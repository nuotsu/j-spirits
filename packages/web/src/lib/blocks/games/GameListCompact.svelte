<section class="max-w-screen-xl mx-auto p-4">
	<HTag class="h2" {...heading} />

	<div class="list <md:full-width">
		{#each $page.stuff.games as game}
			<Game {...game} />
		{/each}

		<a class="j-gradient flex-shrink-0" href={$t_url`/games`} title={$t({ en: 'View more games', ja: '試合結果一覧へ'})}>
			<ArrowRight height="2em" />
		</a>
	</div>
</section>

<style>
	.list {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		scroll-snap-type: x proximity;

		@apply <md:px-4;
	}

	a {
		align-self: center;
		display: grid;
		place-content: center;
		width: 3em;
		height: 3em;
		border-radius: 100%;
		scroll-snap-align: start;

		@apply text-white;
	}
</style>

<script>
	import { page } from '$app/stores'
	import HTag from '~/lib/HTag.svelte'
	import Game from './Game.svelte'
	import ArrowRight from '~/lib/icons/ArrowRight.svelte'
	import { t, t_url } from '~/utils/locales'

	export let heading
</script>
