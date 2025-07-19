import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity('user')
export class User  {
    @PrimaryGeneratedColumn()
    seq : number;
    //integer long float js 는 number가 다해줌 but 정밀도 이슈 숫자가 엄청 크면 overflow 이슈
    @Column({unique :true})
    id : string;
    @Column()
    password : string;
    @Column()
    created_at : number;
    //date라는 함수를 쓰기 싫은게 찍어 보면 서버마다 다르게 나옴 os마다 timezone이 있는데 이게 다르게 나오게된다.
    //typeorm이라는 걸 사용할 거라서 알아서 데이터 변환해주는 라이브러리를 사용해줄 거라서 괜찮음
}