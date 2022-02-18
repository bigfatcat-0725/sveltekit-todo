<script>
	import { todoForm, todos } from '$lib/store'

	const handleTodoAdd = (e) => {
		if (e.keyCode === 13) {
			todos.addTodo($todoForm)
			todoForm.resetForm()
		}
	}
</script>

<header>
	<h1>SVELTE TODO</h1>
	<input
		type="text"
		bind:value="{$todoForm}"
		on:keyup="{handleTodoAdd}"
		placeholder="Input and Just Do It"
	/>
</header>

<style>
	h1 {
		color: gray;
	}
	input {
		width: 300px;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;
		border: 3px solid gray;
		margin-bottom: 20px;
		outline: none;
	}
</style>
