<script>
    import './shoppingmall.css';
    import Burger from '$lib/images/icon/Burger.svelte';
    import Search from '$lib/images/icon/Search.svelte';
    import { goto } from '$app/navigation';

    const prefix = '/shoppingmall';

    let toggle = {
        nav: false,
        search: false,
    };

    let toolbarHeight;
    let search;

    const toggleHandler = {
        nav: () => {
            return toggle.nav = !toggle.nav;
        },
        search: () => {
            return toggle.search = !toggle.search;
        },
    };

    const categories = [
        { url: prefix + '/clothes', name: 'clothes' },
        { url: prefix + '/pants', name: 'pants' },
        { url: prefix + '/jewelry', name: 'jewelry' },
        { url: prefix + '/accessory', name: 'accessory' },
        { url: prefix + '/community', name: 'community' },
    ];
</script>

<div class='shoppingmall'>
    <header>
        <div class='toolbar'>
            <div bind:offsetHeight={toolbarHeight} class='toolbar-container'>
                <button class='pointer'>
                    <svelte:component this={Burger} />
                </button>
                <button class='pointer'>
                    <svelte:component this={Search} />
                </button>
            </div>
        </div>
        <div class='menu-list'>
            <div class='menu-container'>
                {#each categories as category}
                    <div class='menu pointer' on:click={()=>{goto(category.url)}}>{category.name}</div>
                {/each}
            </div>
        </div>
    </header>

    <main>
        <slot />
    </main>
</div>