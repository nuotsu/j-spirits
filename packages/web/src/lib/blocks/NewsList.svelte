<section class="max-w-screen-md mx-auto p-4">
	<h2 class="h2 px-4">{$t(heading)}</h2>

	<ul class="bg-white px-4">
		{#each $page.stuff.news as news}
			<li class="grid gap-x-4 py-2">
				<time class="text-j-green-light md:w-[8ch]" datetime={news.date}>
					{news.date.replace(/-/g, '.')}
				</time>

				<a href={news.link}>
					{$t(news.title)}
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	li + li {
		@apply border-t border-ground-light;
	}

	a[href] {
		@apply hover:underline;
	}

	@screen md {
		li {
			grid-template-columns: auto 1fr;
		}
	}
</style>

<script>
	import { t } from '~/utils/locales'
	import { page } from '$app/stores'

	export let heading
</script>
