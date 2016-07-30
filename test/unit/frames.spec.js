import { getValueOfRolls } from '../../src/frames';

describe('Frames', () => {
  it('should return 10 where there is an occurrence of X', () => {
    expect(getValueOfRolls('X|X')).to.eql([10, 10]);
  });
});
