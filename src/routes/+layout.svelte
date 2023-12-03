<script>
    import '$lib/styles/root.css';
    import '$lib/styles/common.css';
    
    import Layout from '../components/Layout/Layout.svelte';
    import Navigator from '../components/Navigator/Navigator.svelte';
    import Footer from '../components/Footer/Footer.svelte';
</script>

<Layout>
    <svelte:fragment slot='navigator'>
        <Navigator />
    </svelte:fragment>
    
    <slot />
    
    <svelte:fragment slot='footer'>
        <Footer />
    </svelte:fragment>
</Layout>