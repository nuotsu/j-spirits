<a
	class="block bg-white text-j-green first-of-type:j-gradient"
	href={$t_url(`/games#${date}`)}
>
	<time class="uppercase text-sm p-2" datetime={date}>
		{$t({
			en: dateformat(date, 'mmm d', true),
			ja: dateformat(date, 'm月d日', true)
		})}
	</time>

	<Score className="m-auto py-12 px-4 text-2xl" {score} {opponent} />
</a>

<script>
	import dateformat from 'dateformat'
	import { t, t_url } from '~/utils/locales'
	import Score from './Score.svelte'

	export let date, opponent, score
</script>
