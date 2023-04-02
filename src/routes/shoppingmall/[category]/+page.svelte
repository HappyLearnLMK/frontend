<script>
    export let data;
    let productData;
    $: productData = data.productData;
    console.log('category', productData);
</script>

<div>
    <p>Data Check</p>
    {JSON.stringify(productData)}
</div>