<script lang="ts">
	import { navigate } from "svelte-routing";
	import * as Stripe from "stripe-v3"

	let stripe = Stripe('pk_test_...');

	// Events
	const onClickPayment = () => {
		navigate("/success", { replace: true });
	}
</script>

<main>
	<h1>Stripe Payment</h1>
	<button class="payment-btn" on:click={onClickPayment}>
		Payment
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #272727;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.payment-btn {
		background-color: #272727;
		color: white;
		padding: 20px 40px;
		border-radius: 5px;
		font-size: 1.5em;
		font-weight: 500;
		cursor: pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>