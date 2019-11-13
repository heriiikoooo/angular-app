import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './components/user.component';
// import {AboutComponent} from './components/about.component';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoute: Routes =[
    { path: '', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component:HomeComponent, canActivate: [AuthGuard]  },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoute);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
