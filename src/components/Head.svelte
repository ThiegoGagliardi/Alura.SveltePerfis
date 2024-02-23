<header>
    <Title />    
    <SearchBar on:getUser/>
</header>

<script>
  import Title from "./Title.svelte";  
  import SearchBar from "./SearchBar.svelte";
  
</script>

<style>    
    header {    
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
</style>