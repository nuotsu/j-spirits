<svelte:head>
	<title>{$t(title)} | J-Spirits</title>
	<meta name="description" content={description}>
</svelte:head>

<script>
	import { t } from '$utils/locales'

	export let title, description
</script>
