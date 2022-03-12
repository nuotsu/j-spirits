<section class="max-w-screen-xl mx-auto p-4">
	<HTag class="h2" {...heading} />

	{#each $page.stuff.games as game}
		<article>{game.date}</article>
	{/each}
</section>

<script>
	import { page } from '$app/stores'
	import HTag from '~/lib/HTag.svelte'

	export let heading
</script>
