let arr_questions = ["1. Мне легко испортить настроение.",
                     "2. Если меня кто-то обидел, я долго потом помню этот случай.",
                     "3. Я долго переживаю из-за мелких неприятностей (опоздал на автобус, разбил чашку, испачкал рукав одежды).",
                     "4. Я могу в течение продолжительного времени находиться в состоянии, когда не хочется никого видеть и ни с кем разговаривать.",
                     "5. Посторонние разговоры и шумы очень меня отвлекают.",
                     "6. Я могу в течение длительного времени анализировать свои переживания, чувства, поступки.",
                     "7. Мои действия направляются сиюминутным порывом.",
                     "8. Мне часто снятся кошмары.",
                     "9. Меня тревожит мысль, что я чем-то хуже других.",
                     "10. У меня очень часто меняется настроение.",
                     "11. В моем голосе во время спора начинают звучать низкие или высокие тона, которые обычно мне несвойствены.",
                     "12. Мне ничего не стоит выйти из себя.",
                     "13. Если у меня плохое настроение, даже вкусная еда не сможет мне его поднять.",
                     "14. Если меня не понимают, меня это очень раздражает."];

function create_select(str_innerHTML, id)
{
    var label = document.createElement("label");
    label.innerHTML = str_innerHTML;
    document.body.appendChild(label);

    var select = document.createElement('select');
    select.id = id;
    label.setAttribute("for", id);

    var opt = document.createElement("option");
    opt.innerHTML = "Да";
    opt.title = "title";
    opt.value = "0";
    select.appendChild(opt);

    opt = document.createElement("option");
    opt.innerHTML = "Иногда";
    opt.value = "1";
    select.appendChild(opt);

    opt = document.createElement("option");
    opt.innerHTML = "Нет";
    opt.value = "2";
    select.appendChild(opt);

    document.body.appendChild(select);
    document.write("<br/>");
    return select;
}
let id = "select";
var all_elements = [];
for (let i = 0; i < arr_questions.length; i++)
{
    let obj = create_select(arr_questions[i], id + i);
    all_elements.push(obj);
}
/*
    Подсчет результата
*/
function check_result()
{
    let sum = 0;
    /*
        Результаты
    */
    let balls0_16 = "Вы обидчивы, мстительны, болезненно реагируете на то, как по отношению к вам ведут себя окружающие. Ваше настроение меняется ежеминутно. Расслабьтесь и перестаньте обижаться на облака за то, что они плывут слишком медленно. Мир создан вовсе не для того, чтобы досаждать вам.";
    let balls17_22 = "Вы обидчивы, и это создает немало проблем, причем не только вам, но и окружающим. Вы легко выходите из себя, что нередко заканчивается конфликтом с близкими или коллегами. Не стоит так заводиться из-за пустяков, поберегите нервы (и свои и чужие).";
    let balls23_28 = "Вы необидчивый человек. Небольшие разногласия не способны вывести вас из состояния душевного равновесия. Возможно, некоторые даже сочтут вас равнодушным. Не обращайте внимания, скорее всего вам просто завидуют. ";
    for (let i = 0; i < all_elements.length; i++)
        sum += parseInt(all_elements[i].value);
    
    document.write("Ваш результат: " + sum + "<br/>");
    if (sum < 17)
        document.write(balls0_16);
    else if (sum > 16 && sum < 23)
        document.write(balls17_22);
    else
        document.write(balls23_28);
}
