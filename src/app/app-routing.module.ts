import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./core/main-layout/main-layout.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
    },
    {path: '**', redirectTo: '/'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
