<script>
	import { fetchTodos } from '$lib/store'
	import TodoItem from './TodoItem.svelte'
	import { fade, slide } from 'svelte/transition'
	import { flip } from 'svelte/animate'
</script>

<ul>
	{#each $fetchTodos as todo, index (todo.id)}
		<li in:fade out:slide="{{ duration: 100 }}" animate:flip="{{ duration: 300 }}">
			<TodoItem todo="{todo}" />
		</li>
	{/each}
</ul>

<style>
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin-bottom: 20px;
		text-align: left;
		display: flex;
		align-items: center;
	}
</style>
