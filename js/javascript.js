const button = document.querySelector('button');
const APIkey = '8d214f1a71c91b2ec12a035b0ce91984';
const Tab = document.getElementById("tab");

Tab.addEventListener("click",function(){
	var city = document.getElementById('input').value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

if (xhr.status!=200){
			console.log(xhr.status +' ' +xhr.statusText);
			var text = 'Город не найден';
			document.write(text);
} else {
			let xml = JSON.parse(xhr.responseText);
			console.log(xml);
			document.write('</br></br> Ваш город: '+ city);
			document.write('</br> Температура в К: '+ Math.round(xml.main.temp));
			document.write('</br> Температура в градусах: ' + Math.round((xml.main.temp - 273)));
			document.write('</br> Скорость ветра : '+ xml.wind.speed);
			//document.write(xml.)
				};

});



/*
button.onclick = function(){
	let city = document.getElementById('input').value;
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

if (xhr.status!=200){
			console.log(xhr.status +' ' +xhr.statusText);
			var text = 'Город не найден';
			document.write(text);
} else {
			let xml = JSON.parse(xhr.responseText);
			console.log(xml);
			document.write('</br></br> Ваш город: '+ city);
			document.write('</br> Температура в К: '+ Math.round(xml.main.temp));
			document.write('</br> Температура в градусах: ' + Math.round((xml.main.temp - 273)));
			document.write('</br> Скорость ветра : '+ xml.wind.speed);
			//document.write(xml.)
				};

};
*/