<script>
    import './root.css';
    import './common.css';
    import ArrowLeft from '$lib/images/icon/ArrowLeft.svelte';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    let width, navWidth;
    let toggle;
    let top = 0;
    let btnHeight;
    const navHandler = {
        toggle() {
            document.querySelector('.layout').classList.toggle('toggle');
        },
    };
    
    onMount(() => {
        const body = document.querySelector('body');
        toggle = body.offsetWidth < 1441 ? 'toggle' : '';
    });
</script>
<div class='layout {toggle}'>
    <nav>
        <div bind:offsetHeight={btnHeight} class='toggle-btn pointer' on:click={navHandler.toggle}
             style={`--top: ${top-btnHeight/2}px`}>
            <svelte:component this={ArrowLeft} />
        </div>
        
        <div class='menu-wrap'>
            <div class='menu'>
                <p>happy learning</p>
                <ul class='menu-list'>
                    <li on:click={()=>{goto('/')}} style="--text: 'overview'"></li>
                </ul>
            </div>
            <div class='menu list'>
                <p on:click={(e)=>{e.currentTarget.parentNode.classList.toggle('hide')}}>workspace</p>
                <ul class='menu-list'>
                    <li on:click={()=>{goto('/shoppingmall')}} style="--text: 'shopping mall'"></li>
                    <li on:click={()=>{goto('/continue')}} style="--text: 'to be continue...'"></li>
                </ul>
            </div>
            <div class='menu list'>
                <p on:click={(e)=>{e.currentTarget.parentNode.classList.toggle('hide')}}>admin</p>
                <ul class='menu-list'>
                    <li on:click={()=>{goto('/admin/shoppingmall')}} style="--text: 'shopping mall'"></li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Body Section -->
    <main>
        <slot />
    </main>
</div>
