import { bowlingGame } from '../../src/bowling-game';

describe('Bowling game', () => {
	it('should return the score of a game', () => {
		let game = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
		sinon.stub()
		expect(bowlingGame(game)).to.eql(167);
	});
});