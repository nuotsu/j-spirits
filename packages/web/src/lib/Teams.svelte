<div class="py-8 border-t border-j-green-dark flex flex-wrap items-center justify-center gap-y-4 gap-x-8">
	<h2 class="text-center">
		<a href="https://www.lasbl-baseball.com/" target="_blank" rel="noopener noreferrer">
			<span class="text-2xl">LASBL</span>
			<small class="block text-xs">{$t({ en: 'Los Angeles Safety Baseball League', ja: 'ロサンゼルス軟式草野球リーグ' })}</small>
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
