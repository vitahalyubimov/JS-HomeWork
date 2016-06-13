'use strict';
//1 задание
/*var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9,3];
let max = 0;
let symb;
for (var i = 0; i < arr1.length; i++)
{
    let count = 0;
    for (var j = i; j < arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
            count++;
    }
    if (max <= count)
    {
        max = count;
        symb = arr1[i];
    }
}
document.write(symb + ": " + max);*/
//2 задание
/*function fnct(arr)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] instanceof Array)
            res.push(fnct(arr[i]));
        else
            res.push(arr[i]);
    }
    return res;
}

var arr1=[1,2,[3,[4]]];
var result_array = fnct(arr1);
document.write(result_array);*/

//3 задание
/*function first(...arg)
{
    let count = arg[1];
    if (arg.length == 1)
    {
        document.write(arg[0][0] + "<br/>");
    }else if (arg.length == 2)
    {
        if (count < 1)
             document.write("[]" + "<br/>");
        else
            document.write(arg[0].splice(0, count) + "<br/>");
    }
}
first([7, 9, 0, -2]);
first([],0);
first([7, 9, 0, -2], 3);
first([7, 9, 0, -2], 6);
first([7, 9, 0, -2], -3);*/
//4 задание
/*function change_even_num(num)
{
    var str = num.toString();
    var arr = new Array();
    for (let i = 0; i < str.length; i++)
        arr[i] = str[i];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 == 0 && i != arr.length - 1)
            arr[i] += '-'; 
        document.write(arr[i]);        
    }
}
let num = 25468;
change_even_num(num);*/
//5 задание
/*function sum_sqrt_numbers(arr)
{
    return arr.reduce((res, item) => res + Math.sqrt(item));
}

var arr = [5,9,7,3,1,5,6];
document.write(sum_sqrt_numbers(arr));*/
//6 задание
/*function shuffle(arr)
{
    ////////////////////////////////////
    //генерация не повторяющихся чисел//
    ////////////////////////////////////
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
    //Дополнительная проверка 0 индекса так как в предыдущей
    //0 индекс не проверялся (Если в предыдущей проверке првоерять 0 индекс, будет зацикливание)
    for (let i = 0; i < arr.length; i++)
    {
        if (tmp_arr[0] == tmp_arr[i])
        {
            tmp_arr[0] = Math.round(Math.random() * (arr.length - 1));
            i = 0;
        }
    }
    //перемешивание
    var newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++)
    {
        var idx = tmp_arr[i];
        var tmp = arr[idx];
        newArr[i] = tmp;
    }
    return newArr;
}
var arr = [1,2,3,4,5,6,7];
document.write("До: " + arr + "<br/>");
document.write("После: " + shuffle(arr));*/
//7 задание
/*function unique(arr)
{
    var result = [];
    for (let i = 0; i < arr.length; i++)
    {
        let count = 0;
        for (let j = 0; j < arr.length; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count < 2)
            result.push(arr[i]);
    }
    document.write("arr: " + result + "<br/>");
}
unique([7, 7, 9, 0, -2]);
unique([7, 7, 0, -2]);
unique([7, 9, 9, -2]);
unique([1, 1, 1, 1]);*/