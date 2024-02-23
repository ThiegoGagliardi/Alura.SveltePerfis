<script lang="ts">	
  
   
  import type IUser from "./interfaces/IUser";
  import Head from "./components/Head.svelte";
  import UserCard from "./components/UserCard.svelte";

  let user: IUser| null;

  function getUser(event: CustomEvent<IUser|null>){
    user = event.detail;    
  }  

</script>

<div class="app">
  <Head  on:getUser={getUser} />

    {#if user}
      <UserCard {user} />
    {/if}
  </div>

<style>
    
  .app {
      max-height: 100vh;
    }
</style>

