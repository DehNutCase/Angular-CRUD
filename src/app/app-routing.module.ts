import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostsComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostComponent },
  {
    path: 'new',
    loadChildren: () =>
      import('./modules/new-post/new-post.module').then((m) => m.NewPostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
