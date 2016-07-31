import frame from '../../src/frames';

describe('Frames', () => {

  it('should return 10 where there is an occurrence of X', () => {
    expect(frame.getValueOfRolls('X|X')).to.eql([10, 10]);
  });

  it('should return 0 when there is an occurrence of a -', () => {
  	expect(frame.getValueOfRolls('--|--')).to.eql([0, 0, 0, 0]);
  });

  it('should return 2 when a spare occurs after a hit of 8', () => {
  	expect(frame.getValueOfRolls('8/')).to.eql([8, 2]);
  });
});
