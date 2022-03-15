<svelte:component this={Component} {...props} />

<script>
	import { onMount } from 'svelte'

	let { _type, ...props } = $$props

	let Component = null

	onMount(async () => {
		Component =
			_type === 'heroHome'
				? (await import('~/lib/blocks/HeroHome.svelte')).default :
			_type === 'gameList'
				? (await import('~/lib/blocks/games/GameList.svelte')).default :
			_type === 'gameListCompact'
				? (await import('~/lib/blocks/games/GameListCompact.svelte')).default :
			_type === 'upcomingGameList'
				? (await import('~/lib/blocks/games/UpcomingGameList.svelte')).default :
			_type === 'newsList'
				? (await import('~/lib/blocks/NewsList.svelte')).default :
			_type === 'roster'
				? (await import('~/lib/blocks/roster/Roster.svelte')).default :
			_type === 'contactForm'
				? (await import('~/lib/forms/ContactForm.svelte')).default :
			null
	})
</script>
