var reverse = require('./reverse')

test("returns the given array reversed", function(){
    expect(reverse([1, 2, 3])).toBe([3, 2, 1])
})
