<div class="{className} flex items-center justify-center gap-2 mx-auto">
	{#if status === 'completed'}
		{$t(site.title.short)}
		<b class="text-[2em]">{total(score)}</b>
		-
		<b class="text-[2em]">{total(score, 1)}</b>
		{opponent.name.short}
	{:else}
		<b class="text-[1.5em]">{$t(site.title.short)}</b>
		vs
		<b class="text-[1.5em]">{opponent.name.short}</b>
	{/if}
</div>

<script>
	import { page } from '$app/stores'
	import { total } from '~/utils/game'
	import { t } from '~/utils/locales'

	export let opponent, status, score, className

	let { site } = $page.stuff
</script>
