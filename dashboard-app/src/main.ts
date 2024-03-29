import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'zone.js';
import Amplify, {Auth} from "aws-amplify";
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

