{#if _type === 'heroHome'}
	<HeroHome {...props} />
{:else if _type === 'roster'}
	<Roster {...props} />
{:else if _type === 'contactForm'}
	<ContactForm {...props} />
{:else}
	<pre>_type: {_type}</pre>
{/if}

<script>
	import HeroHome from '~/lib/blocks/HeroHome.svelte'
	import Roster from '~/lib/blocks/Roster.svelte'
	import ContactForm from '~/lib/forms/ContactForm.svelte'

	let { _type, ...props } = $$props
</script>
