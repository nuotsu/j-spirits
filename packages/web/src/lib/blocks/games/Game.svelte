<article id={date} class="grid gap-4 bg-white p-4">
	<time class="uppercase text-sm" datetime={date}>
		{$t({
			en: dateformat(date, 'mmm d, yyyy', true),
			ja: dateformat(date, 'yyyy年m月d日', true)
		})}
	</time>

	<Score
		className="{status === 'completed' ? 'text-xl' : 'text-2xl'} text-j-green"
		{opponent} {status} {score}
	/>

	{#if status === 'completed'}
		<Scoreboard {score} {opponent} />
	{:else if !!status}
		<p class="text-center"><small class="chip text-j-green-light">{status}</small></p>
	{/if}

	{#if link}
		<p class="text-right">
			<a class="link" href={link} target="_blank" rel="noopener noreferrer">
				{$t({
					en: 'View game details',
					ja: '試合の詳細を見る'
				})}
			</a>
		</p>
	{/if}
</article>

<script>
	import dateformat from 'dateformat'
	import { t } from '~/utils/locales'
	import Score from './Score.svelte'
	import Scoreboard from './Scoreboard.svelte'

	export let date, opponent, status, score, link
</script>
