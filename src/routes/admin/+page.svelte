<script>
    import './admin.css';

    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        let session = sessionStorage.getItem('login');

        if (!session) return goto('/admin/login');
    });

    const handler = {
        logout() {
            sessionStorage.removeItem('login');

            location.reload();
        },
    };
</script>

<div class='admin'>
    <nav>
        <button class='pointer' id='logout' on:click={handler.logout}>
            LOGOUT
            <svelte:component this={Logout} />
        </button>
    </nav>
    <div class='preview-form'>
        register
    </div>
</div>