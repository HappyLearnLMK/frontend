<script>
    import './shoppingmallNav.css';
    import { goto } from '$app/navigation';
</script>

<div class='shoppingmall-nav'>
    <div class='nav-wrap'>
        <div class='nav-item'>
            <p>Admin</p>
            <ul class='nav-list'>
                <li class='pointer' on:click={()=>{goto('#')}}>Dashboard</li>
            </ul>
        </div>
        <div class='nav-item'>
            <p>Manage Products</p>
            <ul class='nav-list'>
                <li class='pointer' on:click={()=>{goto('/admin/shoppingmall/list')}}>Item List</li>
            </ul>
        </div>
    </div>
</div>

