import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RedisService } from 'src/redis/redis.service';
import * as bcrypt from 'bcrypt'; // 해싱해주는 라이브러리

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private redisService: RedisService,
  ) {}

  async register(id: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    //솔트 공부
    const user = this.userRepo.create({ id : id, password: hashed }); //얘는 메모리에만 생성
    return this.userRepo.save(user);//얘는 데이터베이스에 실제로 값을 반영 데이터 처리를 한다고 생각하자.
  }

  async validateUser(id: string, password: string): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) return null;
    const isValid = await bcrypt.compare(password, user.password); // 유저가 보내원 plain text , 랑 해시된 걸 어떻게 비교함?
    //중간에 솔트가 뭔지 들어가 있데 bcrypt알고리즘에서는 그래서 비교가 가능하데.
    return isValid ? user : null;
  }
}