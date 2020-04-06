import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { AdminLoginComponent } from 'src/app/pages/admin-login/admin-login.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { QuizListComponent } from 'src/app/pages/quiz-list/quiz-list.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "quizlist", component: QuizListComponent },
  { path: "register", component: RegisterComponent },
  { path: "adminlogin", component: AdminLoginComponent },
  { path: "login", component: LoginComponent },
  { path: "userlogin", component: LoginComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "rtl", component: RtlComponent }
];
