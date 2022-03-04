<svelte:head>
	<title>{t(title, $l)} | J-Spirits</title>
	<meta name="description" content={description}>
</svelte:head>

<script>
	import { t, l } from '$utils/locales'

	export let title, description
</script>
