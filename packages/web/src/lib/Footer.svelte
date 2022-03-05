<footer class="bg-j-green text-white">
	<div class="max-w-screen-xl mx-auto px-4">
		<nav>
			<ul class="flex gap-4">
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

		<Teams/>
	</div>

	<p class="bg-j-green-dark p-4 text-center text-xs">© {new Date().getFullYear()} J-Spirits. All Rights Reserved.</p>
</footer>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'
	import LanguageSwitcher from '~/lib/LanguageSwitcher.svelte'
	import Teams from '~/lib/Teams.svelte'

	let { footer } = $page.stuff
</script>
