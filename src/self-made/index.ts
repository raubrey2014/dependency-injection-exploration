import { GenericClassDecorator, Type } from './injector'

/**
 * The reason we annotate classes with decorator is because otherwise they
 * do not emit metadta
 *
 */
const Service = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>): void => {
        console.log('Service: ', target.name)
    }
}

const Controller = (): ClassDecorator => {
    return (target) => {
        console.log('Controller: ', target.name)
    }
}

/**
 * This needs to be defined before User can use it in reflection,
 * otherwise the design:paramtypes of the constructor
 * is one field of "undefined" when it should be "Database"
 */
@Service()
export class Database {
    persist(withID: WithID): void {
        console.log('Persisting!')
        withID.id = 'abcd-1234'
    }
}

interface WithID {
    id: string
}

@Controller()
export class User implements WithID {
    id: string
    private firstName: string
    private lastName: string

    constructor(public database: Database) {}

    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    persist(): void {
        this.database.persist(this)
    }
}
