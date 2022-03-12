<nav class:open>
	<ul class="flex <md:flex-col gap-x-4">
		{#each header.menu as link}
			<li>
				<a href={$t_url(link.link.url)}>
					{$t(link.label || link.link.title)}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	@screen <md {
		nav:not(.open) { display: none; }
	}
</style>

<script>
	import { page } from '$app/stores'
	import { t, t_url } from '~/utils/locales'

	export let open

	let { header } = $page.stuff
</script>
