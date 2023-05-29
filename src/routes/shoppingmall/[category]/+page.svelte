<script>
    import './category.css';
    import { goto } from '$app/navigation';
    import ProductCard from '../../../components/Card/Product/ProductCard.svelte';

    const prefix = '/shoppingmall';
    let width;

    export let data;

    let param, searchParam, cateData, pageIndex, viewData;

    $: param = data.param;
    $: searchParam = data.searchParam;
    $: cateData = data.cateData;

    /* Product Section */
    $: pageIndex = data.pageIndex;
    $: viewData = [...cateData.slice(0, 8)];
</script>

<div bind:clientWidth={width} class='category-page'>
    <div class='category-header'>
        <p class='category-title'>
            {param}
        </p>
        <div class='category-toolbar'>
            <ul class='breadcrumbs'>
                <li
                    class='link'
                    on:click={()=>{
                        goto(prefix)
                    }}
                >
                    home
                </li>
                <li>{param}</li>
                <li>
                    {searchParam ? searchParam : 'all'}
                </li>
            </ul>
            
            <ul class='sort-order'>
                <li class='pointer'>최근 등록순</li>
                <li class='pointer'>상품명순(ㄱ-ㅎ)</li>
                <li class='pointer'>높은 가격순</li>
                <li class='pointer'>낮은 가격순</li>
            </ul>
        </div>
    </div>

    <div class='category-section'>
        <p class='card-info'>등록된 상품 전체 {cateData.length}개 중 {viewData.length}개</p>

        <div class='cards'>
            {#if viewData.length > 0}
                {#each viewData as data}
                    <ProductCard cardData={JSON.stringify(data)} />
                {/each}
            {/if}
        </div>

        {#if cateData.length !== viewData.length}
            <div
                class='btn link'
                on:click={()=>{
                    ++pageIndex;
                    $: viewData = [...viewData, ...cateData.slice(pageIndex * 8, (pageIndex + 1) * 8)]
                }}
            >
                more view +
            </div>
        {/if}
    </div>
</div>

