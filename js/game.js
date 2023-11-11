class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameContainer = document.getElementById('game-container')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Bird(
            this.gameScreen,
            100,
            250, 
            100,
            100, 
            './images/Pidgey-Sprite.png'
        ) 
        this.height = 600; 
        this.width = 800; 
        this.obstacles = [];
        this.score = 0;
        this.lives = 1;
        this.gameOver = false; 
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameOver) {
            return; 
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.player.move();
    }

    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        this.gameOver = true;
        this.gameContainer.style.display = 'none';
        this.gameEndScreen.style.display = 'block';
    }

}