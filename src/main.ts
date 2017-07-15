import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    //Register Service worker
    if ('serviceWorker' in navigator){
      navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.onupdatefound = function(){
          const installingWorker = reg.installing;
          installingWorker.onstatechange = function(){
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller){
                  console.log('New contant or update available');                  
                } else {
                  console.log('Content is now available offline');                  
                }
                break;

              case 'redundant':
                console.error('The current installing worker became redundant');
            }
          }
        }
      }).catch(e =>{
        console.error(e);
      });
    }

  });
