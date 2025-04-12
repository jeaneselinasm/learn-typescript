describe('Any', function(){
    it('should support in typescript', function(){
        let person : any = {
            id: '1',
            name : 'Jeane',
            age : 22
        }

        person.age = 12
        person.address = 'South dakota'

        console.info(person)
    })
})