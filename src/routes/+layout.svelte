<script>
    import './root.css'
    import './common.css'
    import {goto} from "$app/navigation"

    const menuList = [
        {name: 'HappyLearning', url: '/'},
        {name: 'Shopping-mall', url: '/shoppingmall'},
    ]
</script>

<!-- Nav Section -->
<nav id="navigator">
    <ul>
        {#each menuList as menu}
            <li class="link" on:click={()=>{
                        goto(`${menu.url}`)
                    }}>{menu.name}</li>
        {/each}
    </ul>
</nav>
<!-- Body Section -->
<main>
    <slot/>
</main>

<footer>
    <p>Happy Learning</p>
    <p>Member: CH.Lee / KJ.Min / YJ.Kwon</p>
    <p>Collaborate kotlin and svelte</p>
</footer>