import 'reflect-metadata'
import { User } from './self-made'
import { Injector } from './self-made/injector'
import { User as TUser, Task as TTask, Evaluation } from './tsyringe'
import { container } from 'tsyringe'

/**
 * Self made dependency injection
 */
const selfMade = (): void => {
    const user = Injector.resolve<User>(User)
    user.persist()
}

/**
 * Using microsoft's tsyringe
 */
const tsyringe = (): void => {
    /** Injectable */
    const user = container.resolve(TUser)
    user.save()

    /** Auto-injectable */
    const task = new TTask()
    task.save()

    /**
     * Interface resolution - check the @registry
     * decorator on this Evaluation class
     */
    const e = container.resolve(Evaluation)
    e.evaluate()
}

selfMade()

tsyringe()
