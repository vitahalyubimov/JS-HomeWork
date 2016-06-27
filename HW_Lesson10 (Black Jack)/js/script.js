/*
	Массив карт
*/
var imgs_cards = new Array(52);
/*
    Генерация массива случайных(не повторяющихся чисел)
    для выдачи неповторяющихся карт из колоды
*/
function rand_others_numbers(arr)
{
    var tmp_arr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++)
        tmp_arr[i] = Math.round(Math.random() * (arr.length - 2) + 1);
    
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr.length; j++)
        {
            if (tmp_arr[i] == tmp_arr[j] && i != j)
            {
                tmp_arr[i] = Math.round(Math.random() * (arr.length - 1));
                j = 0;
            }
        }
    }
    for (let i = 0; i < arr.length; i++)
    {
        if (tmp_arr[0] == tmp_arr[i])
        {
            tmp_arr[0] = Math.round(Math.random() * (arr.length - 1));
            i = 0;
        }
    }
    return tmp_arr;
}

var numbers_for_get_card = rand_others_numbers(imgs_cards);
var shirt_card = "imgs/shirt_card.png";            //Карта - рубашка
var counter_cards = -1;  //счетчик карт, которые в игре
/*
    Загрузка карт
*/
//Числа
let idx = 0;        //счетчик текущих карт в игре
for (let i = 2; i <= 10; i++)
{
    imgs_cards[idx] = "imgs/" + i + "_buba.jpg";
    imgs_cards[idx + 1] = "imgs/" + i + "_chirva.jpg";
    imgs_cards[idx + 2] = "imgs/" + i + "_krest.jpg";
    imgs_cards[idx + 3] = "imgs/" + i + "_pika.jpg";
    idx += 4;
}
let vls = ["valet", "dama", "karol", "tuz"];
for (let i = 0; i < vls.length; i++)
{
    imgs_cards[idx] = "imgs/" + vls[i] + "_buba.jpg";
    imgs_cards[idx + 1] = "imgs/" + vls[i] + "_chirva.jpg";
    imgs_cards[idx + 2] = "imgs/" + vls[i] + "_krest.jpg";
    imgs_cards[idx + 3] = "imgs/" + vls[i] + "_pika.jpg";
    idx += 4;
}
var btn = document.getElementsByClassName('btn');
var user = document.getElementById('user');
var comp = document.getElementById('computer');

//Массивы для набора карт по ходу игры
var cards_user = new Array();
var cards_comp = new Array();
/*
	Удалить кнопки и создать кнопку "Начать игру"
*/
function delete_btns_and_create_new_btn()
{
	btn[0].style.display = "none";
    btn[1].style.display = "none";
    //
    let new_game = document.createElement('button');
    new_game.setAttribute('class', 'btn');
    new_game.textContent = "Новая игра";
    document.getElementById('fields-game').appendChild(new_game);
    new_game.addEventListener('click', start_new_game);
}
/*
    Вывод результата пользователя
*/
function output_result_user()
{
    let result = count_scores(cards_user);
    let field_result = document.getElementById("field-result");
    field_result.textContent = result;
}
/*
    Подсчет результата
*/
function count_scores(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i][5] === 'v')
            sum += 2;
        else if (arr[i][5] === 'd')
            sum += 3;
        else if (arr[i][5] === 'k')
            sum += 4;
        else if (arr[i][5] === 't')
            sum += 11;
        else if (arr[i][5] === '1' && arr[i][6] === '0')
            sum += 10;
        else 
            sum += parseInt(arr[i][5]);
    }
    return sum;
}

function get_card(gamer)
{
    counter_cards++;
    if (counter_cards > imgs_cards.length - 1)
        return false;
    //индексы карты, которая будет выдана
    let idx_card = numbers_for_get_card[counter_cards];
    var img = document.createElement('img');
    img.setAttribute('src', imgs_cards[idx_card]);
    gamer.appendChild(img);
    return imgs_cards[idx_card];
}

/*
    Проверка на BlackJack
    Правила: https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D1%8D%D0%BA%D0%B4%D0%B6%D0%B5%D0%BA
*/
function output_winner(text)
{
	let field_result = document.getElementById("field-result");
	field_result.textContent = text;
	field_result.style.color = "red";
	field_result.style.fontSize = "25px";
	field_result.style.textShadow = "0 0 15px white";
}
function determine_BlackJack(arr)
{
    //Туз и 10
    if (arr[0][5] == 't' && arr[1][6] == '1' && arr[1][6] == '0'){
        output_winner("BlackJack");
		delete_btns_and_create_new_btn();
        return true;
    }
    //Туз и картинка
    else if (arr[0][5] == 't' && (arr[1][5] == 'v' || arr[1][5] == 'd' || arr[1][5] == 'k')){
        output_winner("BlackJack");
		delete_btns_and_create_new_btn();
        return true;
    }
    return false;
}
/*
    Автоначало игры
*/
(function start_game()
{
    //user
    for (let i = 0 ;i < 2; i++)
        cards_user.push(get_card(user));
    output_result_user();
    determine_BlackJack(cards_user);
    //comp
    cards_comp.push(get_card(comp));
    let img = document.createElement('img');
    img.setAttribute('src', shirt_card);
    comp.appendChild(img);
})()

//максимально допустимое количество карт, которые может взять пользователь
var max_card = 4;   //+ 2, которые даются изначально
/*
    Взять карту
*/
function btn_take_card()
{
    max_card--;
    if (max_card < 0)
        return false;
    cards_user.push(get_card(user));
    output_result_user();
}
btn[0].addEventListener('click', btn_take_card);
/*
    Вскрытие карт компьютера
*/
function showdown_computer()
{
    //Удаление перевернутой карты
    let nodes = comp.childNodes;
    comp.removeChild(nodes[1]);
    //Пока сумма карт компьютера <= 18, выдавать ему карты
    while (count_scores(cards_comp) <= 18)
    {
        cards_comp.push(get_card(comp));
         if (determine_BlackJack(cards_comp))
            return false;
    }
}
/*
    Начать новую игру
*/
function start_new_game(){
    location.reload();
}
/*
    Кнопка "Вскрыть карты"
*/
function btn_showdown()
{
    showdown_computer();
    determine_who_won();
	delete_btns_and_create_new_btn();
}
/*
    Определение победителя
*/
function determine_who_won()
{
    //BlackJack у компьютера
    if (determine_BlackJack(cards_comp))
    {
        return true;
    }
    //BlackJack у пользователя
    else if (determine_BlackJack(cards_user))
    {
        return true;
    }
    //победил пользователь
    let score_user = count_scores(cards_user);
    let score_comp = count_scores(cards_comp);
    
    if (score_comp > 21 && score_user > 21){
        output_winner("Вы проиграли!");
    }
    else if (score_comp <= 21 && score_user <= 21 && score_comp > score_user){
        output_winner("Вы проиграли!");
    }
    else if (score_user <= 21 && score_user > score_comp){
        output_winner("Вы проиграли!");
    }
    else if (score_user <= 21 && score_comp > 21){
        output_winner("Вы победили!");
    }
	else if (score_user > 21){
		output_winner("Вы проиграли!");
	}
    else{
        output_winner("Ничья");
    }
    console.log("Score comp: " + score_comp);
    console.log("Score user: " + score_user);
}
btn[1].addEventListener('click', btn_showdown);