import { User } from '../src/self-made'
import { Injector } from '../src/self-made/injector'

describe('Self made depenency injection', () => {
    it('can inject classes via constructor injection', () => {
        const user = Injector.resolve<User>(User)
        user.persist()
        expect(user.id).toBeDefined()
    })
})
