<script>
    import './root.css';
    import './common.css';
    import { goto } from '$app/navigation';

    const menuList = [
        { name: 'HappyLearning', url: '/' },
        { name: 'Shopping-mall', url: '/shoppingmall' },
    ];
</script>

<!-- Nav Section -->
<nav id='navigator'>
    <ul>
        {#each menuList as menu}
            <li class='link' on:click={()=>{ goto(`${menu.url}`); }}>
                {menu.name}
            </li>
        {/each}
    </ul>
</nav>
<!-- Body Section -->
<slot />

<footer>
    <p><span class='semibold'>project.</span>&nbsp;happy learning</p>
    <p><span class='semibold'>member.</span>&nbsp;
        <a href='https://github.com/culgamyun' target='_blank'>ch.lee</a>&nbsp;┃&nbsp;
        <a href='https://github.com/culgamyun' target='_blank'>kj.min</a>&nbsp;┃&nbsp;
        <a href='https://github.com/culgamyun' target='_blank'>yj.kwon</a>
    </p>
    <p><span class='semibold'>collaborate kotlin and svelte</span></p>
</footer>