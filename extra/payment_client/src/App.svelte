<script lang="ts">
	import { Router, Route, Link } from "svelte-routing"

	// Pages
	import Payment from "./pages/Payment.svelte"
	import Success from "./pages/Success.svelte"
</script>

<main>
	<Router basepath="/">
		<div>
			<Route path="/" component={Payment} />
			<Route path="success" component={Success} />
		</div>
	</Router>
</main>

<style>

</style>