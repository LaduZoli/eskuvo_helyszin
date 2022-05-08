import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm-SRsP2cnw3APnkRUNdS8Ua6pQOWamvU",
  authDomain: "eskuvohelyszin-9fafe.firebaseapp.com",
  projectId: "eskuvohelyszin-9fafe",
  storageBucket: "eskuvohelyszin-9fafe.appspot.com",
  messagingSenderId: "295946047959",
  appId: "1:295946047959:web:d6e5a66d0f18761b493b92"
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const app = initializeApp(firebaseConfig);