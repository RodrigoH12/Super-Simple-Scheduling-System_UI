import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { SchedulingStateModule } from './core/store/state/app.state';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserInfoCardComponent } from './pages/home-page/components/userSection/user-info-card/user-info-card.component';
import { UserClassesCardComponent } from './pages/home-page/components/userSection/user-classes-card/user-classes-card.component';
import { NewsCarouselComponent } from './pages/home-page/components/newsSection/news-carousel/news-carousel.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { ClassesListComponent } from './pages/schedule-page/components/classes-list/classes-list.component';
import { ClassCardComponent } from './pages/schedule-page/components/class-card/class-card.component';
import { ClassInfoModalComponent } from './pages/schedule-page/components/class-info-modal/class-info-modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { NewsCardComponent } from './pages/home-page/components/newsSection/news-card/news-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomePageComponent,
        UserInfoCardComponent,
        UserClassesCardComponent,
        NewsCarouselComponent,
        SchedulePageComponent,
        ClassesListComponent,
        ClassCardComponent,
        ClassInfoModalComponent,
        LoginPageComponent,
        ToastComponent,
        NewsCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SchedulingStateModule,
        StoreModule.forRoot({ router: routerReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),
        EffectsModule.forRoot([]),
        MdbModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
