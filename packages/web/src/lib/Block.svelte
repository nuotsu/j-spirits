{#if _type === 'roster'}
	<Roster {...props} />
{:else if _type === 'contactForm'}
	<ContactForm {...props} />
{:else}
	<pre>_type: {_type}</pre>
{/if}

<script>
	import Roster from '~/lib/Roster.svelte'
	import ContactForm from '~/lib/form/ContactForm.svelte'

	let { _type, ...props } = $$props
</script>
