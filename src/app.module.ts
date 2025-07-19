import { TypeOrmModule } from "@nestjs/typeorm";
import { RedisModule } from "./redis/redis.module";
import { UserModule } from "./user/user.module";
import { Module } from "@nestjs/common";
import { User } from "./user/user.entity";

@Module({//전체 모듈중 어느 모듈들을 쓸거냐
  imports: [
    TypeOrmModule.forRoot({ // 이녀석이 mysql을 사용하는 라이브러리.
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'secret123',
      database: 'pokeraid',
      entities: [User], // 어떤 엔티티를 쓸지 설정을 해줘야한다.
    }),
    RedisModule.forRootAsync(),
    UserModule,
  ],
})
export class AppModule {}