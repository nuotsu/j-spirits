<header class:open>
	<div class="root">
		<div class="self-start">
			<Logo/>
		</div>

		<HeaderLinks {open} />

		<div class="lang text-center md:text-right" class:open>
			<LanguageSwitcher className="action-2" />
		</div>

		<Toggle {open} on:click={() => open = !open}/>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;

		@apply transition-colors bg-ground-light/90 backdrop-blur md:mb-8;
	}

	.root {
		position: relative;
		display: grid;
		gap: 1rem;
		align-items: center;
		padding: 0 1rem;

		@apply max-w-screen-xl mx-auto <md:pb-4;
	}

	@screen md {
		.root {
			grid-template-columns: 1fr auto 1fr;
		}
	}

	@screen <md {
		header:not(.open) {
			@apply bg-transparent backdrop-blur-none;
		}

		.lang:not(.open) { display: none; }
	}
</style>

<script>
	import Logo from './Logo.svelte'
	import HeaderLinks from './HeaderLinks.svelte'
	import LanguageSwitcher from '~/lib/LanguageSwitcher.svelte'
	import Toggle from './Toggle.svelte'

	let open = false
</script>
