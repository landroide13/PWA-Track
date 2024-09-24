


class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-title>Page One</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>Ionic PWA</h1>

            <ion-list>
                <ion-item>
                    <ion-input label="Default label" placeholder="Enter text"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Fixed label" label-placement="fixed" placeholder="Enter text"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Stacked label" label-placement="stacked" placeholder="Enter text"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Floating label" label-placement="floating" placeholder="Enter text"></ion-input>
                </ion-item>
            </ion-list>

          <ion-nav-link router-direction="forward" component="page-two">
            <ion-button>Go to Page Two</ion-button>
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
            <ion-title>Page Two</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>Page Two</h1>
          <div>
            <ion-nav-link router-direction="forward" component="page-three">
              <ion-button>Go to Page Three</ion-button>
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
        <ion-content class="ion-padding">
          <h1>Page Three</h1>
        </ion-content>
      `;
    }
  }

customElements.define('page-one', PageOne);
customElements.define('page-two', PageTwo);
customElements.define('page-three', PageThree);