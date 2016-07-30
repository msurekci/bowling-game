import bowlingGame from '../../src/bowling-game';

describe('bowlingGame', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(bowlingGame, 'greet');
      bowlingGame.greet();
    });

    it('should have been run once', () => {
      expect(bowlingGame.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(bowlingGame.greet).to.have.always.returned('hello');
    });
  });
});
