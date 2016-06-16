var div = document.getElementById('rollercoaster');
var text = div.textContent;
var font_size = 10;
for (let i in text)
{
    var span = document.createElement("span");
    if (i < text.length / 2)
    {
        span.textContent = text[i];
        span.style.fontSize = font_size + "px";
        font_size += 5;
        div.appendChild(span);
    }else{
        span.textContent = text[i];
        span.style.fontSize = font_size + "px";
        font_size -= 5;
        div.appendChild(span);
    }
}