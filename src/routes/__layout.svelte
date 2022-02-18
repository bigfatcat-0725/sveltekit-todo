<div class="app">
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;700&display=swap');

	:global(*) {
		font-family: 'Roboto Serif', sans-serif;
		font-weight: bold;
	}
	.app {
		width: 300px;
		margin: 0 auto;
		text-align: center;
	}
</style>
