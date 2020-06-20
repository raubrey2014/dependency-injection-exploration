import { User } from './self-made'
import { Injector } from './self-made/injector'

const user = Injector.resolve<User>(User)
user.persist()
