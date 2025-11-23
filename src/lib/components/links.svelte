<script lang="ts">
    import Icon from "@iconify/svelte";
    import {createDialog} from "svelte-headlessui";
    import Transition from 'svelte-transition'
    import { toggleMode, mode } from "mode-watcher";
    import { fade, fly } from 'svelte/transition';

    const dialog = createDialog({ label: 'Payment Success' })

</script>

<div class="flex gap-2 items-center">
    <a href="/">
        <Icon class="text-white w-6 h-6" icon="mingcute:home-2-line" />
    </a>

    <button type="button" onclick="{dialog.open}">
        <Icon class="text-white w-6 h-6" icon="mingcute:add-square-line" />
    </button>

    <button onclick={() => toggleMode()}>
        {#key mode.current}
            <span in:fly={{ duration: 2000 }} out:fade>
                <Icon class="text-white w-6 h-6" icon={mode.current === "dark" ? "mingcute:sun-fill" : "mingcute:moon-stars-fill"} />
            </span>
        {/key}
    </button>

</div>

<div class="relative z-10">
    <Transition show={$dialog.expanded}>
        <Transition
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
        >
            <button class="fixed inset-0 bg-black/25" aria-label="close" onclick={dialog.close}></button>
        </Transition>

        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
                <Transition
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-97"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                >
                    <div
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            use:dialog.modal
                    >
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Payment successful</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                                Your payment has been successfully submitted. We’ve sent you an email with all of
                                the details of your order.
                            </p>
                        </div>

                        <div class="mt-4">
                            <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onclick={dialog.close}
                            >
                                Got it, thanks!
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </Transition>
</div>