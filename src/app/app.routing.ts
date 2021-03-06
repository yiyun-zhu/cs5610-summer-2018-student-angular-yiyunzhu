import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from './admin/admin.component';
import {SectionListComponent} from './section-list/section-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
