<script>
    import './productCard.css';
    import { onMount } from 'svelte';

    export let cardData;

    let data;
    $: data = JSON.parse(cardData);

    let loaded = false,
        failed = false,
        loading = false;

    onMount(() => {
        const img = new Image();
        img.src = data.src;
        loading = true;

        img.onload = () => {
            loading = false;
            loaded = true;
        };
        img.onerror = () => {
            loading = false;
            failed = true;
        };
    });
</script>

<div class='product-card'>
    <div class='product-card-box'>
        <div class='product-image'>
            {#if loaded}
                <img alt='no image' src={data.src} />
            {:else if failed}
                <img src='https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg' alt='Not Found' />
            {:else if loading}
                <img src='https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif' alt='Loading...' />
            {/if}
        </div>
        <p name='product-name'>{data.prod_nm}</p>
        <p name='product-summary'>{data.prod_smry}</p>
        <div name='product-price-box'>
            <p class='product-price'>{(data.prod_price * (1 - (data.prod_dc / 100))).toLocaleString('ko-kr')}&nbsp;<sub>원</sub>
            </p>
            {#if data.prod_dc > 0}
                <div>
                    <p class='prev-info'>
                        <del>{data.prod_price.toLocaleString('ko-kr')}</del>&nbsp;<sub>원</sub>
                    </p>
                    <div class='info-box'>
                        할인 정보
                        <div class='product-price-detail'>
                            <p>
                                <span>판매가.</span>
                                <span>{data.prod_price.toLocaleString('ko-kr')}&nbsp;<sub>원</sub></span>
                            </p>
                            <p>
                                <span>할인.</span>
                                <span>{(data.prod_price * (data.prod_dc / 100)).toLocaleString('ko-kr')}
                                    &nbsp;<sub>원</sub></span>
                            </p>
                            <p>
                                <span>적용가.</span>
                                <span>{(data.prod_price * (1 - (data.prod_dc / 100))).toLocaleString('ko-kr')}
                                    &nbsp;<sub>원</sub></span>
                            </p>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>