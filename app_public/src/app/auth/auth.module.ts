import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthMaterialModule } from './auth.material.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthMaterialModule,
        AuthRoutingModule,
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
})
export class AuthModule {}