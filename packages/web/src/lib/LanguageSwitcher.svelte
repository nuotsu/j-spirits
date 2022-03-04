<select bind:value={$l}>
	{#each locales as {value, ...locale}}
		<option {value} selected={locale.default}>
			{locale.title}
		</option>
	{/each}
</select>

<script>
	import { l, locales } from '$utils/locales'
	import { browser } from '$app/env'

	$: $l, browser && localStorage.setItem('locale', $l)
</script>
