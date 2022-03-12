<button class:open on:click title="Toggle menu">
	<Baseball width="1em" height="1em" />
</button>

<style>
	button {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0.5rem;
		display: grid;
		place-content: center;
		width: 1em;
		height: 1em;
		border-radius: 100%;

		@apply text-white text-3xl md:hidden;
	}

	button :global(svg) {
		@apply relative transition-transform;
	}

	button.open :global(svg) {
		transform: rotate(45deg);
	}

	button::before {
		content: '';
		position: absolute;
		inset: 3px;
		border-radius: 100%;

		@apply bg-j-green drop-shadow-sm;
	}
</style>

<script>
	import Baseball from '~/lib/icons/Baseball.svelte'

	export let open
</script>
