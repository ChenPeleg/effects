<script>
  import { LanguageService } from "../services/language.service";
  import { MainStore } from "../store/store.main";

  /**@type {CardContent} */
  export let cardContent;
  /**@type {boolean}*/
  export let isCurrent;
  let clicks = 0;


  const standartCaseName = LanguageService.toStandardCase(cardContent.name);

  /**@type {MouseEventHandler} */
  const clickCard = (ev) => {
    MainStore.cardChosen(cardContent.id);
  };
</script>

<div on:click={clickCard} class="card-wrapper">
  <div
    data-testid={"single-card-" + cardContent.id}
    class="card-body"
    class:isCurrent
  >
    <span class="card-icon">{cardContent.icon}</span>
    <span class="card-text">{standartCaseName}</span>
  </div>
</div>

<style>
  div.card-wrapper {
    display: inline-flex;
  }

  div.card-body {
    display: inline-flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0px 0px;
    min-width: 100px;
    padding: 0.5rem;
    min-height: 80px;
    background-color: white;
    border-radius: 3px;
    box-shadow: var(--main-box-shadow);
    cursor: pointer;
    font-size: var(--main-font-size);
    transition: box-shadow 200ms ease-in-out;
  }

  div.card-body.isCurrent {
    background-color: aquamarine;
    background: var(--main-current-color-gradient);
  }
  div.card-body:hover {
    box-shadow: var(--main-box-shadow-hover);
  }
  span.card-text {
    text-align: center;
    line-height: 90%;
  }
  div.card-body > span.card-icon {
    filter: grayscale(40%) contrast(175%) saturate(100%) hue-rotate(-190deg);
    font-size: var(--main-icon-size);
  }
  @media (max-width: 576px) {
    div.card-body {
      font-size: var(--main-font-size-mobile);
      min-width: 70px;
      max-width: 70px;
      padding: 0.2rem;
      min-height: 60px;
    }
    div.card-body > span.card-icon {
      font-size: var(--main-icon-size-mobile);
    }
    div.card-wrapper {
      flex-grow: 1;
      flex-grow: initial;
    }
  }
</style>
