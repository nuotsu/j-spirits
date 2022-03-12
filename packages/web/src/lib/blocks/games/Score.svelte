<div class={className}>
	JSP
	<b>{total(score)}</b>
	-
	<b>{total(score, 1)}</b>
	{opponent.name.short}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin-inline: auto;
	}

	b {
		font-size: 2em;
	}
</style>

<script>
	import { total } from '@jspirits/common/game'

	export let score, opponent, className
</script>
