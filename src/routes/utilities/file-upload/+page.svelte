<script>
    import Title from '../../../components/Title/Title.svelte';
    import FileUploadBasic from '../../../components/FileUpload/FileUploadBasic/FileUploadBasic.svelte';
</script>

<section>
    <Title>
        <p class='title' slot='title'>File Upload Basic</p>
        <p class='summary' slot='summary'>가장 Basic한 File Upload 방식</p>
    </Title>
    <FileUploadBasic />
</section>