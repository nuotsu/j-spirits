<div class="overflow-x-auto j-gradient p-2 <md:full-width">
	<table class="w-full text-center table-fixed border-separate">
		<thead>
			<tr>
				<th class="w-[120px] <sm:w-[80px]" />
				<th class="w-[0.25ch]" />

				{#each scores[0] as cell, i}
					<th>{i+1}</th>
				{/each}

				<th class="w-[0.25ch]" />
				<th>R</th>
			</tr>
		</thead>

		<tbody>
			{#each scores as team, index}
				<tr>
					<th>
						<Img
							image={getTeam(index === 0 ? 'JSP' : opponent.name.short).image}
							builder={b => b.width(120).height(40)}
							alt={index === 0 ? $t(site.title.full) : opponent.name.full}
						/>
					</th>
					<td/>

					{#each team as run}
						<td class="score">{run}</td>
					{/each}

					<td/>
					<td class="score font-bold">{total(score, index)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.score {
		border: 1px solid transparent;

		@apply bg-j-green-dark;
	}
</style>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'
	import { total } from '~/utils/game'
	import Img from '~/lib/Img.svelte'

	export let score, opponent

	let { site, teams } = $page.stuff

	let scores = Object.values(score.rows).map(row => row.cells)

	function getTeam(short) {
		return teams.find(team => team.name.short === short)
	}
</script>
