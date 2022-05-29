import { ICRUD } from "@interface/ICRUD"

import userDao from "@api/user/dao/UserDao"

class UserService implements ICRUD {
  async list (limit: number, page: number): Promise<any> {

  }

  async create (resources: any): Promise<any> {
    return userDao.newUser(resources)
  }

  async putById (id: string, resources: any): Promise<any> {

  }

  async readById (id: string): Promise<any> {

  }

  async patchById (id: string, resources: any): Promise<any> {

  }

  async deleteById (id: string): Promise<any> {

  }

  async getUserByUsername (username: string): Promise<any> {
    return userDao.getUserByUsername(username)
  }
}

export default new UserService()
