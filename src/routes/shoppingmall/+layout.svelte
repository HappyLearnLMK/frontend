<script>
    import Burger from '../../lib/images/icon/Burger.svelte';

    import './shoppingmall.css';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    let pathname;
    $: pathname = $page.url.searchParams.get('cate');

    let toggle = false;
</script>

<div class='shopping-mall'>
    <div class='sm-header'>
        <p class='link title' on:click={()=>{
            goto('/shoppingmall')
        }}>
            shopping mall
        </p>

        <div class='sm-nav'>
            <div class={`dropdown-toggle link ${toggle}`}
                 on:click={()=>{
                    toggle = !toggle;
                 }}
            >
                <svelte:component this={Burger} />
            </div>
            <div class='dropdown-list'>
                <span class='link'>clothes</span>
                <ul class='dropdown'>
                    <li class='link'>outer</li>
                    <li class='link'>knit</li>
                    <li class='link'>man to man</li>
                </ul>
            </div>
            <div class='dropdown-list'>
                <span class='link'>pants</span>
                <ul class='dropdown'>
                    <li class='link'>denim</li>
                    <li class='link'>jean</li>
                </ul>
            </div>
        </div>
    </div>

    <slot />
</div>