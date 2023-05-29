<script>
    import './root.css';
    import './common.css';
    import ArrowLeft from '$lib/images/icon/ArrowLeft.svelte';

    const menuList = [
        { url: '/', name: 'home' },
        { url: '/shoppingmall', name: 'shopping mall' },
        { url: '/admin', name: 'admin' },
    ];


    let top = 0;
    let btnHeight;
    const navHandler = {
        toggle() {
            document.querySelector('.layout').classList.toggle('toggle');
        },
    };
</script>
<div class='layout'>
    <nav>
        <div bind:offsetHeight={btnHeight} class='toggle-btn pointer' on:click={navHandler.toggle}
             style={`--top: ${top-btnHeight/2}px`}>
            <svelte:component this={ArrowLeft} />
        </div>
        <div class='menu-list'>
            {#each menuList as menu}
                <a class='menu' href={menu.url}>{menu.name}</a>
            {/each}
        </div>
    </nav>

    <!-- Body Section -->
    <main>
        <slot />
    </main>
</div>
