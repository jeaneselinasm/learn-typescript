import { sayHello } from "../src/say-hello"

describe('sayHello', function(){
    it('should return hello jeane', function(){
        expect(sayHello('jeane')).toBe('Hello jeane')
    } )
})