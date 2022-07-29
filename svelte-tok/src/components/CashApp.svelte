<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "../components/Loader.svelte";

  const appId = import.meta.env.VITE_SQUARE_SANDBOX_APP_ID;
  const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;

  let loading = true;

  const cashAppPayment = () => {
    const payments = window.Square.payments(appId, locationId);

    const request = payments.paymentRequest({
      countryCode: 'US',
      currencyCode: 'USD',
      total: {
        amount: '1.00',
        label: 'Total',
      }
    }); 

    const options = {
      redirectURL: window.location.href,
      referenceId: "misodope-cash-app-pay"
    }

    payments.cashAppPay(request, options)
      .then((cashAppPay: any) => {
        cashAppPay.addEventListener('ontokenization', (event: any) => {
          const { tokenResult } = event.detail;
          const tokenStatus = tokenResult.status;
          if (tokenStatus === 'OK') {
            const token = tokenResult.token;
            console.log("When does this happen", token)
          }
        });

        loading = false;

        return cashAppPay;
      })
      .then((cashAppPay: any) => {
        cashAppPay.attach('#cash-app-pay');

        return cashAppPay;
      })
  }

  onMount(() => {
    cashAppPayment();
  })

</script>

<div>
  {#if loading}
    <Loader />
  {:else}
   <div id="cash-app-pay" />
  {/if}
</div>