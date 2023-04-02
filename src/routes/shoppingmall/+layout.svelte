<script>
    import './shoppingmall.css'
    import {goto} from "$app/navigation";
</script>

<div class="page-layout shopping-mall">
    <header>
        <p class="link" on:click={()=>{
            goto('/shoppingmall')
        }}>
            Shopping-mall
        </p>
        <ul>
            <li class="link" on:click={()=>{
                goto('/shoppingmall/clothes')
            }}>
                Clothes
            </li>
            <li class="link" on:click={()=>{
                goto('/shoppingmall/pants')
            }}>
                Pants
            </li>
            <li class="link" on:click={()=>{
                goto('/shoppingmall/accessory')
            }}>
                Accessory
            </li>
        </ul>
    </header>

    <section>
        <slot/>
    </section>
</div>