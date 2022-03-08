<button on:click={() => $sort = by}>
	<slot></slot>

	<ChevronUp
		class={$sort === by ? 'text-j-green-light' : 'opacity-10'}
		height="1em"
	/>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font: inherit;
	}
</style>

<script>
	import { sort } from './Roster.svelte'
	import ChevronUp from '~/lib/icons/ChevronUp.svelte'

	export let by
</script>
