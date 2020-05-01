const enhancer = require('./enhancer.js');
// test away!
describe('repair function', () => {
    describe('should return durability equal to 100', () => {
        it('returns durability 100', () => {
            expect(enhancer.repair({durability:12 , enhancement:11})).toEqual({durability: 100, enhancement:11});
        });
    });
});


describe('Success function', () => {
    describe('should return success values',() =>{
        it('returns successful enhancement below 20',() => {
            expect(enhancer.succeed({enhancement: 1, durability: 50})).toEqual({enhancement: 2, durability: 50});
        });
        it('returns unsuccessful enhancement below 0',() => {
            expect(enhancer.succeed({enhancement: -1, durability: 50})).toEqual('No such item');
        });
        it('returns unsuccessful enhancement above 20',() => {
            expect(enhancer.succeed({enhancement: 21, durability: 50})).toEqual('No such item');
        });
        it('no change if value is already 20', ()=>{
            expect(enhancer.succeed({enhancement: 20, durability: 100})).toEqual({enhancement: 20, durability: 100});
        })
    });
});


describe('Fail function',() =>{
    describe('returns failure values', ()=>{
        it('returns failure values within enhancment parameters 15-0', () =>{
            expect(enhancer.fail({enhancement: 5, durability: 100})).toEqual({enhancement: 5, durability: 95});
        });
        it('returns failure values within enhancment parameters 20-15', () =>{
            expect(enhancer.fail({enhancement: 15, durability: 100})).toEqual({enhancement: 15, durability: 90});
        });
        it('returns failure values outside all enhancment parameters', () =>{
            expect(enhancer.fail({enhancement: -1, durability: 100})).toEqual('No such item');
            expect(enhancer.fail({enhancement: 21, durability: 100})).toEqual('No such item');
        });
        it('returns enhancement and durability values for enhancement values 17-20', ()=>{
            expect(enhancer.fail({enhancement: 17, durability: 100})).toEqual({enhancement: 16, durability: 90});
        });
    });
})