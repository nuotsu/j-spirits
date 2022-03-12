<article>
	<div class="flex gap-4 justify-between text-sm">
		<time class="uppercase" datetime={date}>
			{formattedDate}
		</time>

		{#if link}
		<a href={link} target="_blank" rel="noopener">
			<External height="1em"/>
		</a>
	{/if}
	</div>

	<Score className="m-auto py-12 px-4 text-2xl" {score} {opponent} />
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0 1rem;
		padding: 0.5rem 1rem;
		text-align: center;

		@apply
			bg-white text-j-green
			first-of-type:bg-j-green first-of-type:text-white;
	}
</style>

<script>
	import dateformat from 'dateformat'
	import { t } from '~/utils/locales'
	import Score from './Score.svelte'
	import External from '~/lib/icons/External.svelte'

	export let date, opponent, score, link

	$: formattedDate = $t({
		en: dateformat(date, 'mmm d', true),
		ja: dateformat(date, 'm月d日', true)
	})
</script>
