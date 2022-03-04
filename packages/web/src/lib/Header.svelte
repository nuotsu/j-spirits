<header class="sticky top-0">
	<a href="/">
		<Logo.Dark height={60} />
	</a>

	<nav>
		<ul class="flex">
			{#each header.menu as link}
				<li>
					<a href={link.link.url}>
						{t(link.label || link.link.title, $l)}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<LanguageSwitcher/>
</header>

<script>
	import { page } from '$app/stores'
	import { t, l } from '$utils/locales'
	import Logo from '$lib/logo'
	import LanguageSwitcher from '$lib/LanguageSwitcher.svelte'

	let { header } = $page.stuff
</script>
