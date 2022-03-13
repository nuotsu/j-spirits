<footer class="bg-j-green text-white">
	<div class="max-w-screen-xl mx-auto px-4">
		<div class="py-4 flex flex-wrap items-center justify-between gap-4 <md:justify-center">
			<nav>
				<ul class="flex gap-4">
					{#each footer.menu as link}
						<li>
							<a href={$t_url(link.link.url)}>
								{$t(link.label || link.link.title)}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<LanguageSwitcher className="action" />
		</div>

		<Teams/>
	</div>

	<p class="bg-j-green-dark p-4 text-center text-xs">
		© {new Date().getFullYear()} {$t(site.title.full)}. All Rights Reserved.
	</p>
</footer>

<script>
	import { page } from '$app/stores'
	import { t, t_url } from '~/utils/locales'
	import LanguageSwitcher from '~/lib/LanguageSwitcher.svelte'
	import Teams from '~/lib/Teams.svelte'

	let { site, footer } = $page.stuff
</script>
