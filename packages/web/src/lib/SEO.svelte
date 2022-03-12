<svelte:head>
	<title>{$t(title)} | {$t(site.title.short)}</title>
	<meta name="description" content={description}>
</svelte:head>

<script>
	import { t } from '~/utils/locales'
	import { page } from '$app/stores'

	export let title, description

	let { site } = $page.stuff
</script>
