
describe('Az app.js tesztelése', () => {

    it('100, 130 => 6500', () => {
        
        let actual = calcTriangleArea(100, 130);
        expect(6500).toBe(actual);
    });
    it('30, 35 => 525', () => {
        
        let actual = calcTriangleArea(30, 35);
        expect(525).toBe(actual);
    });
    it('1, 3 => 1.5', () => {
        
        let actual = calcTriangleArea(1, 3);
        expect(1.5).toBe(actual);
    });

});

describe('Bevitel tesztelés', () => {

    it('A bemenetre nullt varunk "a"', () => {
        
        let actual = checkInput('a');
        expect(actual).toBeNull();

    })

    it('A bemenetre nullt varunk "cica"', () => {
        
        let actual = checkInput('cica');
        expect(actual).toBeNull();

    })
    
    it('A bemenetre nullt varunk "33"', () => {
        
        let actual = checkInput('33');
        expect(actual).not.toBeNull();

    })

})
