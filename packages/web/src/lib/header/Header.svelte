<header class="sticky top-0 flex <sm:flex-col items-center justify-between px-4 sm:mb-8">
	<Logo/>

	<nav>
		<ul class="flex gap-4">
			{#each header.menu as link}
				<li>
					<a href={link.link.url}>
						{$t(link.label || link.link.title)}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<LanguageSwitcher/>
</header>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'
	import Logo from './Logo.svelte'
	import LanguageSwitcher from '~/lib/LanguageSwitcher.svelte'

	let { header } = $page.stuff
</script>
