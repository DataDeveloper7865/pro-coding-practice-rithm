// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  // TODO: handle more validation cases here
  expect(validateEdge(50)).toBe(true);
  expect(validateEdge(51)).toBe(false);
});

it('should calculate areas', function () {
  // TODO
  expect(calculateAreas(1,2)).toBe(1);
  expect(calculateAreas(5,4)).toBe(10);
  expect(calculateAreas(10,20)).toBe(100);
});

it('should calculate hypotenuses', function () {
  // TODO
  expect(calculateHypotenuse(3,4)).toBe(5);
  expect(calculateHypotenuse(10, 14)).toBe(17);
  expect(calculateHypotenuse(20, 30)).toBe(36);
});

it('should craft correct message', function () {
  // we'd like to have tests like this:  
  //
  // expect(printHypotenuseAndArea(5, 6)).toEqual(
  //     "Hypotenuse is 5 and area is 6.");
  //
  // TODO test "big triangles" here
});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  // 
  // expect(getResultsFromSideLengths(3, 4)).toEqual(
  //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
  //   
  // TODO test an invalid submission here
});


