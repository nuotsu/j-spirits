{#if _type === 'heroHome'} <HeroHome {...props} />
<!-- {:else if _type === 'newsList'} <NewsList {...props} />
{:else if _type === 'gameListCompact'} <GameListCompact {...props} />
{:else if _type === 'gameList'} <GameList {...props} />
{:else if _type === 'upcomingGameList'} <UpcomingGameList {...props} />
{:else if _type === 'roster'} <Roster {...props} />
{:else if _type === 'contactForm'} <ContactForm {...props} /> -->
{/if}

<script>
	import HeroHome from '~/lib/blocks/HeroHome.svelte'
	// import GameList from '~/lib/blocks/games/GameList.svelte'
	// import GameListCompact from '~/lib/blocks/games/GameListCompact.svelte'
	// import UpcomingGameList from '~/lib/blocks/games/UpcomingGameList.svelte'
	// import NewsList from '~/lib/blocks/NewsList.svelte'
	// import Roster from '~/lib/blocks/roster/Roster.svelte'
	// import ContactForm from '~/lib/forms/ContactForm.svelte'

	let { _type, ...props } = $$props
</script>
