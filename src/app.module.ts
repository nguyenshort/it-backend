import { CacheModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FirebaseStrategy } from '@passport/firebase.strategy'
import { ApolloModule } from '@apollo/apollo.module'
import { UsersModule } from '@app/users/users.module'
import { DatabaseModule } from './database/database.module'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { NotifyModule } from '@app/notify/notify.module'
import { ConfigModule } from '@nestjs/config'
import { PubSubModule } from '@apollo/pubsub.module'
import { CategoriesModule } from '@app/categories/categories.module'
import { UploadModule } from '@app/upload/upload.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { TechnologiesModule } from '@app/technologies/technologies.module'
import { ProjectsModule } from '@app/projects/projects.module'
import { StepModule } from '@app/step/step.module'
import { RolesModule } from '@app/roles/roles.module'
import { BookmarksModule } from './app/bookmarks/bookmarks.module'
import { CommentsModule } from './app/comments/comments.module'
import { ProposalModule } from './app/proposal/proposal.module'
import { AuthModule } from './app/auth/auth.module';
import { FirebaseModule } from './app/firebase/firebase.module';
import { CommentLikesModule } from './app/comment-likes/comment-likes.module';
import { PostsModule } from './app/posts/posts.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
      exclude: ['/graphql*']
    }),
    CacheModule.register(),
    ApolloModule,
    UsersModule,
    DatabaseModule,
    DatabaseModule,
    NotifyModule,
    PubSubModule,
    CategoriesModule,
    UploadModule,
    TechnologiesModule,
    ProjectsModule,
    StepModule,
    RolesModule,
    BookmarksModule,
    CommentsModule,
    ProposalModule,
    AuthModule,
    FirebaseModule,
    CommentLikesModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseStrategy]
})
export class AppModule {}
