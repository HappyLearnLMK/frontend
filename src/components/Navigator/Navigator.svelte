<script>
    import './navigator.css';
    import { goto } from '$app/navigation';
    
    /**
     * TODO
     *   11월 29일 - 로그인 구현
     *   11월 30일 - 파일 업로드 구현
     *
     * */
    
    const navlist = [
        {
            high: 'utilities',
            mid: ['login', 'file-upload'],
        },
    ];
</script>

<nav>
    {#each navlist as obj}
        <div class='category-container'>
            <p class='category-title'>{obj.high}</p>
            {#each obj.mid as mid}
                <button class='category-item' on:click={()=>{goto(`/${obj.high}/${mid}`)}}>{mid}</button>
            {/each}
        </div>
    {/each}
</nav>