<script>
	import Constant from '$lib/constant'
	import { countTodo, todos } from '$lib/store'

	const handleFetchTodoALL = () => todos.changeTodoView(Constant.ALL)
	const handleFetchTodoActive = () => todos.changeTodoView(Constant.ACTIVE)
	const handleFetchTodoDone = () => todos.changeTodoView(Constant.DONE)
</script>

<div class="info">
	<span>COUNT: {$countTodo}</span>
	<div>
		<button
			class:selected="{$todos.viewMode === Constant.ALL}"
			class="btn"
			on:click="{handleFetchTodoALL}">ALL</button
		>
		<button
			class:selected="{$todos.viewMode === Constant.ACTIVE}"
			class="btn"
			on:click="{handleFetchTodoActive}">ACTIVE</button
		>
		<button
			class:selected="{$todos.viewMode === Constant.DONE}"
			class="btn"
			on:click="{handleFetchTodoDone}">DONE</button
		>
	</div>
</div>

<style>
	.info {
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		color: gray;
	}
	.btn {
		background-color: gray;
		color: white;
		border: none;
		padding: 5px;
		border-radius: 5px;
		transition: 0.2s;
	}
	.selected {
		background-color: #333;
	}
	.btn:hover {
		background-color: #333;
	}
</style>
