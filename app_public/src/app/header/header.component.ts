import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
        console.log(this.isLoggedIn)
        this.authService.getLoggedInListener().subscribe((loggedIn) => {
            this.isLoggedIn = loggedIn;
        })
    }

    links = {
        loggedIn: [
            {path: "/", name: "Home"},
        ],
        loggedOut: [
            {path: "/", name: "Home"},
            {path: "login", name: "Log In"},
            {path: "register", name: "Register"}
        ]}

    logout() {
        this.authService.logout();
    }
}