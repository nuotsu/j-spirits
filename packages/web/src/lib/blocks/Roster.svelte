<section class="max-w-screen-xl mx-auto px-4">
	<h2 class="h2">{$t(title)}</h2>

	<ul>
		{#each roster as player}
			<li>
				#{player.jersey}: {player.name}
			</li>
		{/each}
	</ul>
</section>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'

	let { roster } = $page.stuff

	export let title
</script>
