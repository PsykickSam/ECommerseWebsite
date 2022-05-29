<script lang="ts">
  import { navigate } from "svelte-routing";

	const stripe = Stripe('pk_test_0SPpTmjIhu2HYWGbQU2vIPlr', {
		apiVersion: "2018-05-21",
	});

  let isShowing = false;
  let isShowFormElements = false;
  let isPaymentFormLoading = false;
  let clientSecret = null;
  let elements = null;
  let cardElement = null;

  export const setup = (secret: string, callback: Function) => {
    clientSecret = secret;
    isShowing = true;
    isPaymentFormLoading = true;

    setTimeout(callback, 100);
  }

  export const show = () => {
    const options = { appearance: { theme: 'stripe' }, clientSecret };
    elements = stripe.elements();
    cardElement = elements.create('card', {
      hideIcon: false,
      hidePostalCode: false,
    });

    cardElement.mount('#card-element');
    cardElement.on('change', (event) => {
      console.log(event);
    });
    cardElement.on('ready', () => {
      isShowFormElements = true;
      isPaymentFormLoading = false;
    });
  };

  export const hide = () => {
    isShowing = false;
    isShowFormElements = false;
  };

  // Events
  const onClickPaymentSubmit = async (event) => {
    setLoading(true);

    const tokenResponse = await stripe.createToken(cardElement)

    if (tokenResponse.error) {
      console.error(tokenResponse.error);
    }

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          token: tokenResponse.token.id
        }
      }
    });

    setLoading(false);
    hide();

    if (error !== undefined) {
      console.error(error);
      alert(error);
      return;
    }

    // console.log(paymentIntent)
    navigate(`http://localhost:5555/success?token=${tokenResponse.token.id}`);
  }

  // Show a spinner on payment submission
  const setLoading = (isLoading: boolean) => {
    if (isLoading) {
      // @ts-ignore
      document.querySelector("#submit").disabled = true;
      document.querySelector("#submit-spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      // @ts-ignore
      document.querySelector("#submit").disabled = false;
      document.querySelector("#submit-spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  }
</script>

{#if isShowing}
  <div class="modal-wrapper">
    <div class="modal">

      {#if isPaymentFormLoading}
        <div class="spinner-payment-form" id="payment-form-spinner"></div>
      {/if}

      <form id="card-form">
        {#if isShowFormElements}
          <h2 id="card-title">Payment</h2>
        {/if}

        <div id="card-element"></div>

        {#if isShowFormElements}
          <button id="submit" on:click={onClickPaymentSubmit}>
            <div id="submit-spinner" class="spinner-submit hidden"></div>
            <span id="button-text">Pay now</span>
          </button>
        {/if}

        <div id="card-message" class="hidden"></div>
      </form>
    </div>
  </div>
{/if}

<style>
.modal-wrapper {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.modal {
  background-color: white;
  max-width: 40vw;
  max-height: 70vh;
  padding: 1rem;
  margin: 15% auto;
}

/* Variables */
* {
  box-sizing: border-box;
}

.hidden {
  display: none;
}

#card-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#card-title {
  text-align: left;
}

#card-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner-payment-form,
.spinner-payment-form:before,
.spinner-payment-form:after,
.spinner-submit,
.spinner-submit:before,
.spinner-submit:after {
  border-radius: 50%;
}
.spinner-payment-form,
.spinner-submit {
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner-payment-form {
  color: #5469d4;
}
.spinner-submit {
  color: #ffffff;
}
.spinner-payment-form:before,
.spinner-payment-form::after,
.spinner-submit:before,
.spinner-submit:after {
  position: absolute;
  content: "";
}
.spinner-payment-form:before,
.spinner-submit:before {
  width: 10.4px;
  height: 20.4px;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner-payment-form:before {
  background: #ffffff;
}
.spinner-submit:before {
  background: #5469d4;
}
.spinner-payment-form:after,
.spinner-submit:after {
  width: 10.4px;
  height: 10.2px;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}
.spinner-payment-form:after {
  background: #ffffff;
}
.spinner-submit:after {
  background: #5469d4;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}
</style>