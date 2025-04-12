describe('Array', function(){
    it('should same with javascript', function(){
        const names: string[] = ['jeane', 'selina', 'sumi']
        const ages : number[] =[1, 2, 21]
        
        
        console.info(names)
        console.info(ages)
    })

    // array read only
    it('should support readonly array', function(){
        const hobbies : ReadonlyArray<string> = ['Reading', 'Cooking']

        console.info(hobbies)

        // below should error and show : Index signature in type 'readonly string[]' only permits reading.
        // hobbies[0] = 'Running'
    })


    // tuple

    it('should support tuple', function(){
        const person : readonly[string, string, number] = ['Jeane', 'female', 22]

        console.info(person)

        // error read only
        // person[0] = 'Selina'
    })
})