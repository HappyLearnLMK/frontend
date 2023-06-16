<script>
    import { goto } from '$app/navigation';
    
    import './shoppingmall.css';
    
    import Burger from '$lib/images/icon/Burger.svelte';
    import Search from '$lib/images/icon/Search.svelte';
    import Home from '$lib/images/icon/Home.svelte';
    
    const prefix = '/shoppingmall';
    
    let toggle = {
        nav: false,
        search: false,
    };
    
    let toolbarHeight;
    let search;
    let hide = false;
    
    const toolbarHandler = {
        toggle: () => {
            hide = !hide;
        },
    };
    
    const categories = [
        { url: '/all', name: 'all' },
        { url: '/clothes', name: 'clothes' },
        { url: '/pants', name: 'pants' },
        { url: '/jewelry', name: 'jewelry' },
        { url: '/accessory', name: 'accessory' },
        { url: '/community', name: 'community' },
    ];
</script>

<div class='shoppingmall'>
    <header>
        <div class='toolbar'>
            <div bind:offsetHeight={toolbarHeight} class='toolbar-container'>
                <a class='pointer' href='{prefix}/' style='background-color: var(--color-18)'>
                    <svelte:component this={Home} />
                </a>
                <a class='pointer' on:click={toolbarHandler.toggle}>
                    <svelte:component this={Burger} />
                </a>
                <a class='pointer' href='{prefix}/search'>
                    <svelte:component this={Search} />
                </a>
            </div>
            <div class={`menu-detail ${hide}`}>
            
            </div>
        </div>
        <div class='menu-list'>
            <div class='menu-container'>
                {#each categories as category}
                    <div class='menu pointer' on:click={()=>{goto( prefix + category.url)}}>{category.name}</div>
                {/each}
            </div>
        </div>
    </header>
    
    <main>
        <slot />
    </main>
    
    <footer>
        <div class='policy-wrap'>
            <a href=''>이용약관</a>
            <a href=''>개인정보 처리방침</a>
            <a href=''>about us</a>
            <a href=''>faq</a>
        </div>
        <div class='footer-content'>
            Here is contents
        </div>
    </footer>
</div>