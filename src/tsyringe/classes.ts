/**
 * TSyringe provides constructor injection of decorated classes
 * with injectable and autoInjectable.
 *
 * Since classes have type information at runtime, we can resolve
 * them without any extra information. This is not the case with interfaces...
 * Remember how in the self-made exception we could only handle
 * classes (they have a "new" operation)? Tsyringe allows us to
 * also inject interface and non-class types with @inject and
 * @injectAll keywords (for array types).
 *
 * This is imperative for maintaining non-concrete dependencies.
 */
import { injectable, autoInjectable } from 'tsyringe'

class Database {
    persist(): void {
        console.log('Persisting!')
    }
}

/**
 * Injectable allows us to resolve an instance of decorated
 * class using
 *
 * const user = container.resolve(User)
 *
 * NOTE: concrete Database dependency
 */
@injectable()
export class User {
    constructor(public database: Database) {}

    save(): void {
        this.database.persist()
    }
}

/**
 * autoInjetable REPLACES our constructor so that we do not
 * even need to call container.resolve() explicitly. We can
 * simply use the normal constructor for the class (optional
 * arguments so we can call it bare) and get our dependencies
 * auto-wired.
 *
 * const task = new Task()
 *
 * NOTE: concrete Database dependency
 *
 */
@autoInjectable()
export class Task {
    constructor(private database?: Database) {}

    save(): void {
        this.database.persist()
    }
}
