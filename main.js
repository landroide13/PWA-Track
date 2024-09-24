import { register } from './JS/functions.js';

class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-title>Page One</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" color="light">
          <h1>List Records</h1>

            <ion-list>
                <ion-list-header>
                    <ion-label>Records</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label>Pokémon Yellow</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Mega Man X</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>The Legend of Zelda</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Pac-Man</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Super Mario World</ion-label>
                </ion-item>
            </ion-list>

          <ion-nav-link router-direction="forward" component="page-two">
            <ion-button>Add New</ion-button>
          </ion-nav-link>
          <ion-nav-link router-direction="forward" component="page-three">
            <ion-button>Previus Records</ion-button>
          </ion-nav-link>
        </ion-content>
      `;
    }
}

class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title >Add Record</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" color="light">
            <h1>Add</h1>
            <ion-list>
                <ion-item>
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
                    <ion-modal>
                        <ion-datetime id="datetime"></ion-datetime>
                    </ion-modal>
                </ion-item>

                <ion-item>
                    <ion-input label="Exercise" label-placement="fixed" placeholder="Enter Exercise"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Sets" label-placement="fixed" placeholder="Enter Sets"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Weight" label-placement="fixed" placeholder="Enter Weight"></ion-input>
                </ion-item>
            </ion-list>

          <div>
            <ion-nav-link router-direction="forward" component="page-one">
              <ion-button>Go List</ion-button>
            </ion-nav-link>
            <ion-nav-link router-direction="forward" component="page-one">
              <ion-button>Add Exercise</ion-button>
            </ion-nav-link>
          </div>
        </ion-content>
      `;
    }
}

  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>Page Three</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding" color="light">
          <h1>Page Three</h1>
        </ion-content>
      `;
    }
  }

customElements.define('page-one', PageOne);
customElements.define('page-two', PageTwo);
customElements.define('page-three', PageThree);

register();




