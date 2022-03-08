<section class="max-w-screen-xl mx-auto px-4">
	<h2 class="h2 text-center">{$t(title)}</h2>

	<div class="overflow-x-auto <md:full-width">
		<table class="bg-white w-full whitespace-nowrap">
			<thead>
				<tr>
					<th><Sort by="jersey">{$t({ en: 'Jersey', ja: '背番号' })}</Sort></th>
					<th><Sort by="name">{$t({ en: 'Name', ja: '選手名' })}</Sort></th>
					<th>{$t({ en: 'Position', ja: 'ポジション' })}</th>
					<th>{$t({ en: 'Title', ja: '役職' })}</th>
					<th>{$t({ en: 'B/T', ja: '打/投' })}</th>
				</tr>
			</thead>
			<tbody>
				{#each sortBy(roster, $sort) as player (player.name)}
					<tr class="text-center">
						<td class="font-bold text-j-green-light">{player.jersey}</td>
						<td>{player.name}</td>
						<td>{player.position || ''}</td>
						<td>{$t(player.title)}</td>
						<td>{player.bt || ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	thead th {
		padding: 0.5em;
		@apply border-b-2 border-j-green-light;
	}

	tr:nth-child(odd) td {
		@apply bg-j-green-light/5;
	}

	tr:hover td {
		@apply bg-j-green-light text-white;
	}
</style>

<script>
	import { page } from '$app/stores'
	import { t } from '~/utils/locales'
	import Sort from './Sort.svelte'

	export let title

	let { roster } = $page.stuff

	function sortBy(arr, key) {
		return arr.sort((a, b) => {
			if (a[key] < b[key]) return -1
			if (a[key] > b[key]) return 1
			return 0
		})
	}
</script>

<script context="module">
	import { writable } from 'svelte/store'

	export const sort = writable('jersey')
</script>
