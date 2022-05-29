import UserModel from "@models/User"
import Exception from "@error/index"

import { CreateUserDto } from "../dto/CreateUserDto"

class UserDao {
  async newUser (fields: CreateUserDto) {
    const user = new UserModel({
      username: fields.username,
      email: fields.email,
      password: fields.password
    })

    const result = await Exception.Handler.Async(async () => await user.save())
    return result === null ? null : result._doc
  }

  async createUser (fields: CreateUserDto) {
    const user = new UserModel({
      username: fields.username,
      email: fields.email,
      password: fields.password,
      isAdmin: fields.isAdmin,
      permissionFlags: fields.permissionFlags
    })

    const result = await Exception.Handler.Async(async () => await user.save())
    return result === null ? null : result._doc
  }

  async updateUserById () {

  }

  async deleteUserById () {

  }

  async getUserByEmail (email: string) {

  }

  async getUserById (id: string) {

  }

  async getUserByUsername (username: string) {
    const result = await UserModel.findOne({ username })
    return result === null ? null : result._doc
  }

  async getUsers () {

  }
}

export default new UserDao()
