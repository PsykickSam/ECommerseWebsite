<script lang="ts">
	import { navigate } from 'svelte-routing';

	import StripeModal from '../modal/Stripe.svelte';

	// Variables
	let stripeModal = null;
  let clientSecret = null;


  fetch("http://localhost:5000/api/stripe/client/secret", {
    headers: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWMxZTBhMDhjMDU0YzdjNDU2ZDU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDM1Mzk1MiwiZXhwIjoxNjQxMjE3OTUyfQ.9L5ANSgg-3P_LgovdWvUsffhdUM4EidgObXfCJMj_IA"
    }
  })
    .then(res => res.json())
    .then(async (data) => {
      clientSecret = data.secret;
    })
    .catch(err => console.log(err))

  // Events
  const onClickPayment = () => {
    // navigate('/success', { replace: true });

    if (!clientSecret) {
      alert("Error! No client secret is set!");
      return;
    }

    stripeModal.setup(clientSecret, () => {
      stripeModal.show();
    });
  };
</script>

<main>
  <h1>Stripe Payment</h1>
	<button class="payment-btn" on:click={onClickPayment}> Payment </button>

	<StripeModal bind:this={stripeModal}></StripeModal>
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
