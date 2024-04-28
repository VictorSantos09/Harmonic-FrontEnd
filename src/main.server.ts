import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

config.providers = [config.providers, provideAnimations()];

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
