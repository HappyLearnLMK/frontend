<script>
    import './adminLogin.css';
    import { goto } from '$app/navigation';

    let src = 'https://picsum.photos/1440/1080';

    let id, pw;

    const formHandler = {
        submit() {
            if (id === 'admin' && pw === 'admin') {
                sessionStorage.setItem('login', '1');
                goto('/admin');
            } else {
                alert('FAIL');
            }
        },
    };
</script>

<div class='admin-login'>
    <div class='admin-event'>
        <img alt='event' {src}>
    </div>
    <div class='admin-form'>
        <div class='form-container'>
            <div class='form-title'>ADMIN</div>
            <div class='form-input'>
                <div class='form-id'>
                    <label for='id'>ID</label>
                    <input bind:value={id} id='id' required type='text'>
                </div>
                <div class='form-pw'>
                    <label for='pw'>PASSWORD</label>
                    <input bind:value={pw} id='pw' required type='password'>
                </div>
            </div>
            <div class='form-btn'>
                <button class={`pointer ${id && pw ? 'active' : ''}`} on:click={formHandler.submit}>LOGIN</button>
            </div>
        </div>
    </div>
</div>