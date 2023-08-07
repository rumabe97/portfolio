import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComingSoonComponent} from "./shared/components/coming-soon/coming-soon.component";
import {MainLayoutComponent} from "./core/main-layout/main-layout.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
