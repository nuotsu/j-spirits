<!-- {#if _type === 'heroHome'} <HeroHome {...props} />
{:else if _type === 'newsList'} <NewsList {...props} />
{:else if _type === 'gameListCompact'} <GameListCompact {...props} />
{:else if _type === 'gameList'} <GameList {...props} />
{:else if _type === 'upcomingGameList'} <UpcomingGameList {...props} />
{:else if _type === 'roster'} <Roster {...props} />
{:else if _type === 'contactForm'} <ContactForm {...props} />
{/if} -->

{#await getComponent()}
	<pre>Loading...</pre>
{:then Component}
	<svelte:component this={Component} {...props} />
{/await}

<script>
	// import HeroHome from '~/lib/blocks/HeroHome.svelte'
	// import GameList from '~/lib/blocks/games/GameList.svelte'
	// import GameListCompact from '~/lib/blocks/games/GameListCompact.svelte'
	// import UpcomingGameList from '~/lib/blocks/games/UpcomingGameList.svelte'
	// import NewsList from '~/lib/blocks/NewsList.svelte'
	// import Roster from '~/lib/blocks/roster/Roster.svelte'
	// import ContactForm from '~/lib/forms/ContactForm.svelte'

	let { _type, ...props } = $$props

	async function getComponent() {
		switch (_type) {
			case 'heroHome':
				return (await import('~/lib/blocks/HeroHome.svelte')).default
			case 'gameList':
				return (await import('~/lib/blocks/games/GameList.svelte')).default
			case 'gameListCompact':
				return (await import('~/lib/blocks/games/GameListCompact.svelte')).default
			case 'upcomingGameList':
				return (await import('~/lib/blocks/games/UpcomingGameList.svelte')).default
			case 'newsList':
				return (await import('~/lib/blocks/NewsList.svelte')).default
			case 'roster':
				return (await import('~/lib/blocks/roster/Roster.svelte')).default
			case 'contactForm':
				return (await import('~/lib/forms/ContactForm.svelte')).default
			default: return null
		}
	}
</script>
