"use strict";
// 1.  Поздороваться с пользователем - "Hello!"
alert ('Hello!');
// 2. Спросить пользователь как его зовут - "What is your name?"
const userName = prompt("What is your name?");
// 3. Сказать пользователю - "Nice to meet you, имя_пользователя!"
alert (`Nice to meet you, ${userName}!`);
// 4. Спросить у пользователя сколько ему полных лет
const userAge = +prompt (`How old are you, ${userName}`);
// 5. На основании ответа пользователя вычислить год рождения пользователя и вывести его
const todaysDate = new Date().toLocaleDateString().slice(6);
const userYear = todaysDate - userAge;
alert (`It was a Lucky year in ${userYear} when you was born!`);

