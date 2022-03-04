<footer class="bg-j-green text-white">
	<div class="section">
		<nav>
			<ul class="flex">
				{#each footer.menu as link}
					<li>
						<a href={link.link.url}>
							{$t(link.label || link.link.title)}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<LanguageSwitcher/>
	</div>
</footer>

<script>
	import { page } from '$app/stores'
	import { t } from '$utils/locales'
	import LanguageSwitcher from '$lib/LanguageSwitcher.svelte'

	let { footer } = $page.stuff
</script>
