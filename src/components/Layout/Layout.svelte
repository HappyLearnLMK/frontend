<script>
    import './layout.css';
</script>

<div class='layout'>
    <slot name='navigator' />
    
    <slot />
    
    <slot name='footer' />
</div>