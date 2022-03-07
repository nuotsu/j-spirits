<select bind:value={lang} on:change={onChange}>
	{#if loading}
		<option disabled>Loading...</option>
	{:else}
		{#each locales as {value, ...locale}}
			<option {value} selected={locale.default}>
				{locale.title}
			</option>
		{/each}
	{/if}
</select>

<script>
	import { default_locale, locales } from '~/utils/locales'
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation'
	import { page } from '$app/stores'

	$: lang = $page.params.lang || default_locale.value

	let loading = false

	beforeNavigate(() => loading = true)
	afterNavigate(() => loading = false)

	function onChange() {
		goto(`/${ lang }/${ $page.params.slug || '' }`)
	}
</script>
