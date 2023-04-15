<script>
    import Burger from '../../lib/images/icon/Burger.svelte';
    import Search from '../../lib/images/icon/Search.svelte';

    import './shoppingmall.css';
    import { goto } from '$app/navigation';

    const prefix = '/shoppingmall';

    let toggle = {
        nav: false,
        search: false,
    };

    let search;

    const toggleHandler = {
        nav: () => {
            return toggle.nav = !toggle.nav;
        },
        search: () => {
            return toggle.search = !toggle.search;
        },
    };

    let width;
</script>

<div bind:clientWidth={width} class='shopping-mall'>
    <div class='header'>
        <p
            class='link title'
            on:click={()=>{
                goto(prefix)
            }}
        >
            shopping mall
        </p>

        <div class='nav'>
            <div class='navigator'>
                <div class={`dropdown-toggle link ${toggle.nav}`}>
                    <span on:click={()=>{toggle.nav = !toggle.nav}}>
                        <svelte:component this={Burger} />
                    </span>
                </div>
                {#if width > 800}
                    <div class='category'>
                        <span
                            class='link'
                            on:click={()=>{
                                goto(prefix + '/clothes')
                            }}
                        >
                            clothes
                        </span>
                        <ul class='dropdown'>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/clothes?opt=outer');
                                }}
                            >
                                outer
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/clothes?opt=knit');
                                }}
                            >
                                knit
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/clothes?opt=man-to-man');
                                }}
                            >
                                man to man
                            </li>
                        </ul>
                    </div>
                    <div class='category'>
                        <span
                            class='link'
                            on:click={()=>{
                                    goto(prefix + '/pants');
                                }}
                        >
                            pants
                        </span>
                        <ul class='dropdown'>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/pants?opt=denim');
                                }}
                            >
                                denim
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/pants?opt=jean');
                                }}
                            >
                                jean
                            </li>
                        </ul>
                    </div>
                    <div class='category'>
                        <span
                            class='link'
                            on:click={()=>{
                                goto(prefix + '/accessory')
                            }}
                        >
                            accessory
                        </span>
                        <ul class='dropdown'>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/accessory?opt=jewelry');
                                }}
                            >
                                jewelry
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/accessory?opt=necklace');
                                }}
                            >
                                necklace
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/accessory?opt=rings');
                                }}
                            >
                                rings
                            </li>
                            <li
                                class='link'
                                on:click={()=>{
                                    goto(prefix + '/accessory?opt=bracelet');
                                }}
                            >
                                bracelet
                            </li>
                        </ul>
                    </div>
                {:else}
                    <div class='side-bar'>
                        <ul>
                            <li class='link'>clothes</li>
                            <li class='link'>pants</li>
                            <li class='link'>accessory</li>
                        </ul>
                        <p class='link' on:click={()=>{toggle.nav = !toggle.nav}}>&times;</p>
                    </div>
                {/if}
            </div>

            <div class='toolbar'>
                <div class='link'>
                    <input
                        bind:value={search}
                        placeholder='search'
                        spellcheck='false'
                    />
                    <span>
                        <svelte:component this={Search} />
                    </span>
                </div>
                <span class='link'>login</span>
                <span class='link'>sign up</span>
            </div>
        </div>
    </div>

    <slot />
</div>