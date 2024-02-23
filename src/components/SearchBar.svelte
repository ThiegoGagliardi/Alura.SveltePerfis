<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type IUser from "../interfaces/IUser";
  import { findUser, findRepositories } from "../requests/index";
  import buildUser from "../utils/BuildUser";
  import GenericButton from "./GenericButton.svelte";

  let valorInput: string | null = "ThiegoGagliardi";
  let Statushttp: number | null = null;

  const dispatcher = createEventDispatcher<{ getUser: IUser | null }>();

  async function onSubmit() {
    const userResponse = await findUser(valorInput);
    const userRepositoriesResponse = await findRepositories(valorInput);

    if (userResponse?.ok && userRepositoriesResponse?.ok) {
      Statushttp = userResponse.status;
      const userDatas = await userResponse?.json();
      const repositoriesDatas = await userRepositoriesResponse?.json();

      dispatcher("getUser", buildUser(userDatas, repositoriesDatas));
    } else {
      Statushttp = null;
      dispatcher("getUser", null);
    }
  }
</script>

<div class="busca-usuario">
  <form on:submit|preventDefault={onSubmit}>
    <input
      type="text"
      class="input"
      class:erro-input={Statushttp === 404}
      bind:value={valorInput}
      placeholder="Pesquise aqui o usuário"
    />

    {#if Statushttp === 404}
      <span class="erro">Usuário não localizado</span>
    {/if}

    <GenericButton>
      Buscar
      <img src="/assets/lupa.svg" alt="lupa" />
    </GenericButton>
  </form>
</div>

<style>
  .busca-usuario {
    position: relative;
    width: 70%;
  }

  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro-input {
    border: 1px solid #ff003e;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }
</style>
