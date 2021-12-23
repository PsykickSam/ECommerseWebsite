<script lang="ts">

</script>

<main>
	<h1>Stripe Payment</h1>
	<h2 class="success">SUCCESS</h2>
	<p>Thank you for your order. Thanks for choose 'HAMA'</p>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		color: #272727;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.success {
		background-color: #28b0c8;
		color: white;
		width: 200px;
		padding: 20px 40px;
		border-radius: 5px;
		font-size: 1.5em;
		font-weight: 500;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>