//1
/*function check_isPalindrom(str)
{
    str = str.replace(/ /g, '');
    str = str.replace('.', '');
    str = str.replace(/,/g, '');
    str = str.toLowerCase();
    let first = str.slice(0, str.length / 2);
    if (str.length % 2)
        first = str.slice(0, str.length / 2 + 1);
    let second = str.slice(str.length / 2);

    let idx = second.length - 1;
    let isPalindrom = 0;
    for (let i = 0; i <= second.length - 1; i++)
    {
        if (first[i] == second[idx])
            isPalindrom++;
        idx--;
    }
    if (str.length == 0)
    {
        document.write("Вы не ввели слово" + "<br/>");
        return false;
    }
    if (isPalindrom == first.length)
        document.write("Палиндром" + "<br/");
    else
        document.write("Не палиндром" + "<br/");
}
let str = prompt("Слово: ");
check_isPalindrom(str);*/
//2
/*function first_symb_toUpperCase(str)
{
    let tmp = new Array();
    for (let i = 0; i < str.length; i++)
        tmp[i] = str[i];
    
    tmp[0] = tmp[0].toUpperCase();
    let newStr = "" + tmp;
    return newStr;
}
var str = "вася";
document.write(first_symb_toUpperCase(str));    //Возвращаю строку, но хз почему выводит через запятую как массив
*/
//3
/*function checkSpam(str, value)
{
    str = str.toLocaleLowerCase();
    value = value.toLocaleLowerCase();
    if (str.search(value) != -1)
        return true;
    else 
        return false;
}

let viagra = "viagra";
let xxx = "XXX";
document.write(checkSpam("buy ViAgRa now", viagra) + "<br/>");
document.write(checkSpam("free xxxxxx", xxx) + "<br/>");
document.write(checkSpam("innocent rabbit", viagra) + "<br/>");*/
//4
/*function extractCurrencyValue(str)
{
    let price = parseInt(str.replace("$",""));
    document.write(price);
}
let price = "$120";
extractCurrencyValue(price);*/
//5
/*function sort(s)
{
    let str = new Array();
    for (let i = 0; i < s.length; i++)
        str[i] = s[i];
    
    for (let i = 0; i < str.length; i++)
    {
        let tmp;
        for (let j = str.length - 1; j > i; j--)
        {
            if (str[j] < str[j - 1])
            {
                tmp = str[j];
                str[j] = str[j - 1];
                str[j - 1] = tmp;
            }
        }
    }
    let newStr = "" + str;
    return newStr;
}
let str = "webmaster";
document.write(sort(str));*/