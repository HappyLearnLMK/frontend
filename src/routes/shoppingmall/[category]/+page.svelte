<script>
    import './category.css';
    import { goto } from '$app/navigation';
    import ProductCard from '../../../components/ProductCard/ProductCard.svelte';

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

            {#if width < 800}
                <select class='sort-order'>
                    <option value='opt1'>최근 등록순</option>
                    <option value='opt2'>상품명순(ㄱ-ㅎ)</option>
                    <option value='opt3'>높은 가격순</option>
                    <option value='opt4'>낮은 가격순</option>
                </select>
            {:else}
                <ul class='sort-order'>
                    <li class='link'>최근 등록순</li>
                    <li class='link'>상품명순(ㄱ-ㅎ)</li>
                    <li class='link'>높은 가격순</li>
                    <li class='link'>낮은 가격순</li>
                </ul>
            {/if}
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

