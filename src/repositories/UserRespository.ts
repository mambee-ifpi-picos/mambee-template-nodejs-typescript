import  BaseRepository  from './base/BaseRepository';
import { User } from './base/ModelTypes';

export default class UserRepository extends BaseRepository {

  public async add(newUser: User): Promise<User> {
    return super.getPrisma().user.create({
      data: newUser,
    });
  }

  public async  getAll(): Promise<User[]> {
    return super.getPrisma().user.findMany({});
  }

}
