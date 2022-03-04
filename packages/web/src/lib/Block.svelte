{#if _type === 'roster'}
	<Roster/>
{:else}
	<pre>_type: {_type}</pre>
{/if}

<script>
	import Roster from '$lib/Roster.svelte'

	export let _type
</script>
