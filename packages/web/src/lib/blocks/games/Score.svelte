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
	export let score, opponent, className

	const total = ({ rows }, index = 0) => rows[index]?.cells?.reduce(
		(acc, curr) => parseInt(Number(acc) + (Number(curr) || 0)),
		0
	)
</script>
