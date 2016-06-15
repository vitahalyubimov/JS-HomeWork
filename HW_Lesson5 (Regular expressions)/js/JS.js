//1
/*let text = 'Виталий';
let pattern = /[A-ZА-ЯЁ]/;
let result = text.match(pattern);

if (result !== null)
    document.write(text + " - с большой буквы" + "<br/>");
else
    document.write(text + " - с маленькой буквы" + "<br/>");*/
//2
/*let mail = "mail@domain.com.ua";
let pattern = /\w+@\w+(\.\w+)+/;
let result = mail.match(pattern);
if (result === null)
    document.writeln(mail + " - невалиден");
else
    document.writeln(mail + " - валиден");*/
//3
/*let text = "     здесь   находится некий текст  !       ";
pattern = /\s+$/g;      //удалить пробелы с конца 
text = text.replace(pattern, '');
pattern = /^\s+/g;      //удалить пробелы с начала
text = text.replace(pattern, '');
pattern = /\s{2,}/g;    //удаление 2+ пробелов в середине текста
text = text.replace(pattern, ' ');
document.write("<pre>" + text + "</pre>");*/

//4
/*
    Данное решение по моему мнению самое оптимальное, пробовал через i % 3 == 0, не точно работает(не во всех случаях правильно ставится точка, например при 100000), а использовать регулярные выражения пробовал так: \d{3}$ - так выделяет с конца три символа. Если было бы можно сделать возможность повтора такого выражения только с конца то я думаю нормально отработало, а так не работает
*/
/*let str = "100000000";
let arr = [];
for (let i = 0; i < str.length; i++)
    arr[i] = str[i];
let idx = 0;        ///считает количество повторяющихся цифр
for (let i = str.length-1; i >= 0;i--)
{
   if (!isNaN(arr[i]))
   {
        if (idx == 3)
        {
            arr[i] += '.';
            idx = 0;
        }
        idx++;
   }else
       idx = 0;
}
for (let i of arr)
    document.write(i);*/
