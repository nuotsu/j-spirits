<svelte:head>
	<html {lang} />

	{#if $page.url.pathname === '/'}
		<link rel="canonical" href="{$page.url.origin}/{default_locale.value}"/>
	{:else}
		<link rel="alternate" href={$page.url.href} hreflang={lang}/>
	{/if}
</svelte:head>

<Header/>

<main class="flex-grow">
	<slot></slot>
</main>

<Footer/>

<style>
	:global(#app) {
		@apply flex flex-col min-h-screen;
	}
</style>

<script>
	import Header from '~/lib/header/Header.svelte'
	import Footer from '~/lib/Footer.svelte'
	import { page } from '$app/stores'
	import '../app.css'

	let lang = $page.params.lang || default_locale.value
</script>

<script context="module">
	import client from '~/utils/sanity'
	import { default_locale } from '~/utils/locales'

	export async function load({ params }) {
		const { lang = default_locale.value } = params

		const header = await client.fetch(`
			*[_type == 'header'][0]{
				menu[]{
					...,
					link->{
						...,
						'url': '/${ lang }/' + slug.current
					}
				}
			}
		`)

		const footer = await client.fetch(`
			*[_type == 'footer'][0]{
				menu[]{
					...,
					link->{
						...,
						'url': '/${ lang }/' + slug.current
					}
				}
			}
		`)

		const roster = await client.fetch(`*[_type == 'player'] | order(jersey asc)`)

		const teams = await client.fetch(`*[_type == 'team'] | order(name.full asc)`)

		return {
			stuff: {
				header,
				footer,
				roster,
				teams,
			}
		}
	}
</script>
