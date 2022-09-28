import  BaseRepository  from './BaseRepository';
import { User } from './ModelTypes';

export default class UserRepository extends BaseRepository {

  public async add(newUser: User): Promise<User> {
    return await super.getPrisma().user.create({
      data: newUser,
    });
  }

  public async  getAll(): Promise<User[]> {
    return await super.getPrisma().user.findMany({});
  }

}
