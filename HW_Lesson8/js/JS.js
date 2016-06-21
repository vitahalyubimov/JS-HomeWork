let imgs = [10];
let div_id_img = document.getElementById("img");
let idx_next_img  = 0;
let timer;

imgs[0] = "url(http://tecnoinnovador.com/wp-content/uploads/2016/01/internet.png)";
imgs[1] = "url(http://demo.all4coding.com/magento/media/background/background_8.jpg)";
imgs[2] = "url(http://hdwallpapershdpics.com/wp-content/uploads/2015/10/HD-Pictures-23.jpg)";
imgs[3] = "url(http://www.planwallpaper.com/static/images/wallpapers-hd-8000-8331-hd-wallpapers.jpg)";
imgs[4] = "url(https://newevolutiondesigns.com/images/freebies/hd-widescreen-wallpaper-3.jpg)";
imgs[5] = "url(http://wallpaper.zone/img/853958.jpg)";
imgs[6] = "url(http://www.wallhd4.com/wp-content/uploads/2015/03/3d-wallpaper-hd-cars-2.jpeg)";
imgs[7] = "url(http://content.wallpapers-room.com/resolutions/1024x768/A/Wallpapers-room_com___Adamant_Citadel_zoom_by_alexiuss_1024x768.jpg)";
imgs[8] = "url(http://www.evdekorasyonusitesi.com/wp-content/uploads/2014/09/2015-Dekoratif-Cam-Aksesuar-Modelleri5.jpg)";
imgs[9] = "url(http://t.wallpaperweb.org/wallpaper/3_dimensional/1920x1080/super3dguitarwallpaper1996_1920x1080.jpg)";
function selected_point(idx)
{
	let points = document.getElementsByClassName("point-for-carousel");
	for (let i = 0; i < points.length; i++)
		points[i].classList.remove("color-point");
	points[idx].classList.add("color-point");
}
function click_by_point(self)
{
	//узлы всех точек
	let points = document.getElementsByClassName("point-for-carousel");
	//очистка всех точек
	for (let i = 0; i < points.length; i++)
		points[i].classList.remove("color-point");
	//выбор нажатой кнопки
	self.classList.add("color-point");
	//идентификатор к которому будут прибавляться числа для сравнения с идентификатором нажатой кнопки
	let search_id_point = "point";
	//поиск заданной картинки для установки
	for (let i = 1; i <= points.length; i++)
		if (search_id_point + i == self.id){
			div_id_img.style.backgroundImage = imgs[i - 1];
			idx_next_img = i - 1;
		}
}
function click_btn_left(self)
{
    if (idx_next_img - 1 < 0)
		idx_next_img = imgs.length - 1;
	else
		idx_next_img--;
    div_id_img.style.backgroundImage = imgs[idx_next_img];
   
    selected_point(idx_next_img);
}
function click_btn_right()
{
	if (idx_next_img + 1 > imgs.length - 1)
		idx_next_img = 0;
	else
		idx_next_img++;
	div_id_img.style.backgroundImage = imgs[idx_next_img];
    
	selected_point(idx_next_img);
}
function change_interval(self)
{
    clearInterval(timer);
    if (self.value == "")
        self.value = "1";
    timer = setInterval(click_btn_right, 1000 * self.value);
}
(function(){
    //изначальный интервал 3сек
	timer = setInterval(click_btn_right, 1000 * 3);
}())