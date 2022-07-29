<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "../components/Loader.svelte";

  const isDev = import.meta.env.DEV;
  const appId = isDev ? import.meta.env.VITE_SQUARE_SANDBOX_APP_ID : import.meta.env.VITE_SQUARE_P_APP_ID;
  const locationId = isDev ? import.meta.env.VITE_SQUARE_LOCATION_ID : import.meta.env.VITE_SQUARE_P_LOCATION_ID;

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

<div class="flex flex-col items-center w-full md:w-[450px] lg:w-[450px] text-sm p-2.5 my-2.5 rounded-md text-left bg-amber-300 text-black">
  {#if loading}
    <Loader />
  {:else}
    <p class="text-black text-base font-bold mb-[10px]">Enter to win Jackpot - $1 to play!</p>
    <div id="cash-app-pay"  />
  {/if}
</div>
