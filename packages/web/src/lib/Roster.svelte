<section class="section">
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

	let { roster } = $page.stuff
</script>
