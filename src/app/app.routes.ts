import { Routes } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { ABoutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NotfoundedComponent } from './notfounded/notfounded.component';

export const routes: Routes = [
    { path: '', redirectTo: 'startFramework', pathMatch: 'full' },
    { path: 'startFramework', component: StartFrameworkComponent,title:'StartFramework'},
    { path: 'startFramework/About', component: ABoutComponent ,title:'About'},
    { path: 'startFramework/Portfolio', component: PortfolioComponent ,title:'Portfolio'},
    { path: 'startFramework/Contact', component: ContactComponent ,title:'Contact'},
    { path: 'startFramework/gallary', component: GallaryComponent ,title:'Gallary'},
    { path: '**', component: NotfoundedComponent }
];
