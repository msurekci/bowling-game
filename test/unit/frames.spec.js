import { getValueOfRolls } from '../../src/frames';

describe('Frames', () => {
  it('should return 10 where there is an occurrence of X', () => {
    expect(getValueOfRolls('X|X')).to.eql([10, 10]);
  });

  it('should return 0 when there is an occurrence of a -', () => {
  	expect(getValueOfRolls('--|--')).to.eql([0, 0, 0, 0]);
  });
});
