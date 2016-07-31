import { bowlingGame } from '../../src/bowling-game';
import frames from '../../src/frames';
import score from '../../src/score-calculator';

describe('Bowling game', () => {

	it('should return the score of a game', () => {
		let game = 'X|7/|9-|X|-8|8/|-6|X|X|X||81',
		getValueOfRollsSpy = sinon.spy(frames, 'getValueOfRolls'),
		calculateSpy = sinon.spy(score, 'calculate');

		expect(bowlingGame(game)).to.eql(167);
		expect(getValueOfRollsSpy).to.have.been.calledWith(game);
		expect(calculateSpy).to.be.called === true;
	});
});