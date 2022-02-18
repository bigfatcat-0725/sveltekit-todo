<script>
	import { todos } from '$lib/store'

	export let todo

	const handleCheckTodo = () => todos.checkTodo(todo.id)
	const handleChangeTodoEditMode = () => todos.changeTodoEditMode(todo.id)
	const handleEditTodo = () => {
		todos.editTodo(todo)
		todos.closeTodoEditMode()
	}
	const handleRemoveTodo = () => todos.removeTodo(todo.id)
</script>

<input type="checkbox" bind:checked="{todo.done}" on:click="{handleCheckTodo}" />
{#if $todos.editMode === todo.id}
	<input type="text" bind:value="{todo.content}" on:focusout="{handleEditTodo}" />
{:else}
	<span class:checked="{todo.done}" on:dblclick="{handleChangeTodoEditMode}">{todo.content}</span>
	<button on:click="{handleRemoveTodo}">X</button>
{/if}

<style>
	input[type='checkbox'] {
		width: 10%;
		height: 20px;
		margin-right: 15px;
	}
	input[type='text'] {
		width: 90%;
		height: 25px;
		border: 2px solid lightcoral;
		border-radius: 5px;
		outline: none;
		font-size: 20px;
	}
	span {
		display: block;
		width: 80%;
		color: #333;
	}
	button {
		width: 10%;
		height: 28px;
		background-color: rgba(190, 0, 0, 0.7);
		color: white;
		border-radius: 50%;
		border: none;
		transition: 0.2s;
	}
	button:hover {
		background-color: rgba(190, 0, 0, 1);
	}
	.checked {
		text-decoration: line-through;
	}
</style>
