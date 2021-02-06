package snake.scene;

import snakes.graphics.Text;
import snakes.util.Constants;

public class GameOverText extends Text {
	
	public GameOverText(int score) {
		super(String.format(Constants.GAME_OVER_TEXT, score), Constants.GAME_OVER_LOCATION, Constants.GAME_OVER_COLOR);
	}

}
