<script>
    import './root.css';
    import './common.css';
    import { goto } from '$app/navigation';

    const menuList = [
        { name: 'HappyLearning', url: '/' },
        { name: 'Shopping-mall', url: '/shoppingmall' },
    ];
</script>

<!-- Header Section -->
<header>
    <div id='navigator'>
        <ul>
            {#each menuList as menu}
                <li class='link' on:click={()=>{ goto(`${menu.url}`); }}>
                    {menu.name}
                </li>
            {/each}
        </ul>
    </div>
</header>
<!-- Body Section -->
<slot />

<!-- Footer Section -->
<footer>
    <div id='footer'>
        <p><span class='semibold'>project.</span>&nbsp;happy learning</p>
        <p><span class='semibold'>member.</span>&nbsp;
            <a href='https://github.com/culgamyun' target='_blank'>ch.lee</a>&nbsp;┃&nbsp;
            <a href='https://github.com/culgamyun' target='_blank'>kj.min</a>&nbsp;┃&nbsp;
            <a href='https://github.com/culgamyun' target='_blank'>yj.kwon</a>
        </p>
        <p><span class='semibold'>collaborate kotlin and svelte</span></p>
    </div>
</footer>