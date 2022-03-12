{#if tag === 'h1'}
	<h1 {...props}>{$t(text)}</h1>
{:else}
	<h2 {...props}>{$t(text)}</h2>
{/if}

<script>
	import { t } from '~/utils/locales'

	let { text, tag, _type, ...props } = $$props
</script>
