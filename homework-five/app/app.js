var GAMES = [
    {
        gameTitle: "BurgerTime",
        gameThumbImg: "Burgertime_150.jpg",
        gameFullImg: "Burgertime_300.jpg",
        gameBriefDescription: "Lorem, ipsum dolor sit.",
        gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        gameRating: "E",

    },
        
    {
            gameTitle: "Oregon Trail",
            gameThumbImg: "oregonTrail_150.jpg",
            gameFullImg: "oregonTrail_300.jpg",
            gameBriefDescription: "Lorem ipsum dolor sit amet.",
            gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            gameRating: "E",
    },

    {
                gameTitle: "Tiny Tower",
                gameThumbImg: "tinyTower_150.jpg",
                gameFullImg: "tinyTower_300.jpg",
                gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur.",
                gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                gameRating: "E",
    },

    {
                    gameTitle: "Bit City",
                    gameThumbImg: "BitCity_150.jpg",
                    gameFullImg: "BitCity_300.jpg",
                    gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
                    gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    gameRating: "E",
    },

    {
        gameTitle: "Madden 22",
        gameThumbImg: "madden22_150.jpg",
        gameFullImg: "madden22_300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        gameRating: "E",

    },
        
    {
            gameTitle: "NBA 2K22",
            gameThumbImg: "nba2k22_150.jpg",
            gameFullImg: "nba2k22_300.jpg",
            gameBriefDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia?",
            gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            gameRating: "E",
    },

    {
                gameTitle: "Doom",
                gameThumbImg: "doom_150.jpg",
                gameFullImg: "doom_300.jpg",
                gameBriefDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, doloremque.",
                gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                gameRating: "M",
    },

    {
                    gameTitle: "Call of Duty: Black Ops",
                    gameThumbImg: "COD_150.jpg",
                    gameFullImg: "COD_300.jpg",
                    gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iusto distinctio?",
                    gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    gameRating: "M",
    },

    {
        gameTitle: "Mario Kart",
        gameThumbImg: "MK_150.jpg",
        gameFullImg: "MK_300.jpg",
        gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio, atque error eveniet consectetur iste?",
        gameLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        gameRating: "E",
},

{
            gameTitle: "Wii Game Party",
            gameThumbImg: "WiiGP_150.jpg",
            gameFullImg: "WiiGP_300.jpg",
            gameBriefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quaerat? Maiores modi explicabo ab quibusdam reprehenderit.",
            gameLongDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quaerat? Maiores modi explicabo ab quibusdam reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quaerat? Maiores modi explicabo ab quibusdam reprehenderit.",
            gameRating: "E",
},


];

function loadData() {
    $.each(GAMES, function(index, game){
$("#app").append(`<div id="${index}" class="game-holder">
<h4>${game.gameTitle}</h4>
<div class="game-image">
    <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}">
</div>
<div class="brief-rating">
    <div class="brief-description">
       ${game.gameBriefDescription}
    </div>
    <div class="rating">${game.gameRating}</div>
</div>
</div>`);
    });

// for(let i = 0; i < GAMES.length; i++) {
//     console.log(GAMES[i].gameTitle);
// }
}

function initListeners() {}

$(document).ready(function() {
    // initListeners();
    loadData();
});