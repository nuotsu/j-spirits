<div>
	<h2>
		<a href="https://www.lasbl-baseball.com/" target="_blank" rel="noopener noreferrer">
			LASBL ({$t({ en: 'Los Angeles Safety Baseball League', ja: 'ロサンゼルス軟式草野球リーグ' })})
		</a>
	</h2>

	<ul class="grid grid-cols-5 max-w-[450px]">
		{#each teams as team}
			<li>
				<a href={team.link} target="_blank" rel="noopener noreferrer">
					<Img
						image={team.image}
						builder={b => b.width(300).height(150)}
						alt={team.name.full}
					/>
				</a>
			</li>
		{/each}
	</ul>
</div>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'
	import Img from '~/lib/Img.svelte'

	let { teams } = $page.stuff
</script>
