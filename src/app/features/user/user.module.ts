//create a user module with necessary package without components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import the user service
import { UserService } from './user.service';
//import the user model
import { User } from './user.model';
import { UserListComponent } from './components/user-list/user-list.component';
//create a user module
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        UserService,
    ],
    declarations: [
        UserListComponent
    ],
})
export class UserModule { }