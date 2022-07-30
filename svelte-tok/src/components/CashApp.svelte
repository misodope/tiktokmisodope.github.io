<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "../components/Loader.svelte";

  const isDev = import.meta.env.DEV;
  const appId = isDev ? import.meta.env.VITE_SQUARE_SANDBOX_APP_ID : import.meta.env.VITE_SQUARE_P_APP_ID;
  const locationId = isDev ? import.meta.env.VITE_SQUARE_LOCATION_ID : import.meta.env.VITE_SQUARE_P_LOCATION_ID;

  let loading = true;

  interface CashAppPay {
    addEventListener: Function;
    attach: Function; 
  }

  const renderPaymentCompleted = () => {
    const cashAppElement = document.getElementById("cash-app-pay");
    const lastChild = cashAppElement?.lastElementChild;

    const pElement = document.createElement("p");
    pElement.innerHTML = "Cash App Payment Complete!"
    
    lastChild && cashAppElement?.replaceChild(pElement, lastChild);
  }

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

    return payments.cashAppPay(request, options)
      .then((cashAppPay: CashAppPay) => {
        cashAppPay.addEventListener('ontokenization', (event: any) => {
          const { tokenResult } = event.detail;
          if (tokenResult.status === 'OK') {
            renderPaymentCompleted();
          }
        });

        loading = false;

        return cashAppPay;
      })
      .then((cashAppPay: CashAppPay) => {
        const cashAppButtonStyles = {
          theme: "light",
          values: "light",
        }

        cashAppPay.attach('#cash-app-pay', cashAppButtonStyles);

        return cashAppPay;
      })
      .catch((err: Error) => {
        console.error(err);
      })
  }

  onMount(() => {
    cashAppPayment();
  })
</script>

<div class="mb-3 flex flex-col items-center">
  {#if loading}
    <Loader />
  {:else}
    <p class="text-amber-300 text-lg font-bold mb-[10px]">Get MisoDope Coffee! - $1</p>
    <div id="cash-app-pay" />
  {/if}
</div>
