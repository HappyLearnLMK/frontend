<script>
    import './loginBasic.css';
    
    const loginSubmit = async () => {
    
    };
</script>

<form class='login-basic'>
    <div class='login-input-form'>
        <input id='username' required type='text' />
        <label for='username'>
            username
        </label>
    </div>
    
    <div class='login-input-form'>
        <input id='password' required type='password' />
        <label for='password'>
            password
        </label>
    </div>
    
    <button on:submit={loginSubmit} type='submit'>Sign in</button>
</form>