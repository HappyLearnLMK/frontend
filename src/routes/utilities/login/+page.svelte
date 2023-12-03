<script>
    import LoginBasic from '../../../components/Login/Basic/LoginBasic.svelte';
    import Title from '../../../components/Title/Title.svelte';
</script>

<section>
    <Title>
        <p class='title' slot='title'>Login Basic</p>
        <p class='summary' slot='summary'>가장 Basic한 Login 방식</p>
    </Title>
    <LoginBasic />
</section>