import 'reflect-metadata'
export type GenericClassDecorator<T> = (target: T) => void

export interface Type<T> {
    new (...args: any[]): T
}

/**
 * This class "expression" rather than "declaration" instantiates
 * a singleton.
 */
export const Injector = new (class {
    /**
     * Resolve the dependencies for a class by looking at the parameters in the
     * class constructore. How? Using the Reflect api.
     *
     * Instantiate those dependencies. How? Because each one can be represented
     * as a Type - as defined above that Type has a new operator. Call the new operator
     * on the target passing in dependencies that recursively have their
     * dependencies resolved.
     *
     * @param target the target class for which we want to resolve dependencies
     */
    resolve<T>(target: Type<any>): T {
        const tokens = Reflect.getMetadata('design:paramtypes', target) || []
        const injections = tokens.map((t) => Injector.resolve<any>(t))
        return new target(...injections)
    }
})()
