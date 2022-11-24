const stringCount = require('./string');
test('check the length of a string', () => {
    
    expect(stringCount([1,2,3,4])).toBe(4);
    
}) ;