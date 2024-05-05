import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from "./home/home.component";
import { CatComponent } from "./cat/cat.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AddCatComponent } from "./add-cat/add-cat.component";
import { AuthInterceptor } from "./auth/utils/auth.interceptor";
import { AuthModule } from "./auth/auth.module";
import { AppMaterialModule } from "./app.material.module";
import { AppRoutingModule }from "./app.routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CatComponent,
        HeaderComponent,
        FooterComponent,
        AddCatComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        AppMaterialModule,
        AuthModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        provideAnimationsAsync()
    ],
})
export class AppModule {}
