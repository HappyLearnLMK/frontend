<script>
    import './fileUploadBasic.css';
    
    const fileSelect = (e) => {
        let file = e.target.value.split('\\');
        
        selectFile.value = file[file.length - 1];
    };
    
    const fileUpload = async () => {
    
    };
</script>

<form class='file-upload-basic'>
    <div class='file-input-form'>
        <input id='selectFile' readonly type='text' />
        <label for='fileUpload'>파일 선택</label>
        <input id='fileUpload' on:change={fileSelect} type='file'>
    </div>
    
    <button on:click={fileUpload} type='submit'>Upload</button>
</form>