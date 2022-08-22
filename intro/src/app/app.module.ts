import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppErrorHandler } from './common/errors/app.error.handler';
import { ErrorHandler } from '@angular/core';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeComponent } from './components/like/like.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ChangePasswordFormComponent } from './components/change-password-form/change-password-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubService } from './services/github.service';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path: "archive/:year/:month", component: ArchiveComponent},
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts' , component: PostsComponent},
      { path: "**", component: NotFoundComponent}
      
    ]),
  ],
  providers: [
    PostsService,
    GithubService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
