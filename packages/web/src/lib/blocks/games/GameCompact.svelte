<li class="bg-white text-j-green first-of-type:j-gradient">
	<a
		class="flex flex-col h-full"
		href={$t_url(`/games#${date}`)}
	>
		<div class="flex gap-4 p-2 pb-0 justify-between">
			<time class="uppercase text-sm" datetime={date}>
				{$t({
					en: dateformat(date, 'mmm d', true),
					ja: dateformat(date, 'm月d日', true)
				})}
			</time>

			{#if status !== 'completed'}
				<small class="chip">{status}</small>
			{/if}
		</div>

		<Score
			className="m-auto py-12 px-4 text-2xl"
			{opponent} {status} {score}
		/>
	</a>
</li>

<script>
	import dateformat from 'dateformat'
	import { t, t_url } from '~/utils/locales'
	import Score from './Score.svelte'

	export let date, opponent, status, score
</script>
