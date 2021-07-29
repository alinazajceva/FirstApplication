'use strict';

let number0fFilms;

function start() {
    number0fFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [], 
    private: false
};


function rememberMyFilms() {
    for( let i = 0; i < 2; i++ ) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if( personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический пользователь");
    } else if( personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
         console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.private);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGeners();