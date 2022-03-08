<header>
	<div class="max-w-screen-xl mx-auto px-4 sm:mb-8 flex <sm:flex-col items-center justify-between">
		<Logo/>

		<nav>
			<ul class="flex gap-4">
				{#each header.menu as link}
					<li>
						<a href={$t_url(link.link.url)}>
							{$t(link.label || link.link.title)}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<LanguageSwitcher className="action-2" />
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
	}
</style>

<script>
	import { page } from '$app/stores'
	import { t, t_url } from '~/utils/locales'
	import Logo from './Logo.svelte'
	import LanguageSwitcher from '~/lib/LanguageSwitcher.svelte'

	let { header } = $page.stuff
</script>
