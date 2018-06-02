$(document).ready(function() {
	$.simpleWeather({
		location: 'Yokohama, JP',
		unit: 'c',
		success: function(weather) {
			var html="";
			html ='<p>'+weather.city+'の天気</p>';
			html +='<p>温度'+weather.temp+'℃'+'</p>';
			html +='<p>湿度'+weather.humidity+'％'+'</p>';
			html +='<p>'+weather.currently+'</p><img src=\"'+weather.image+'\">';
			html +='<p>最終更新:'+weather.updated+'</p>';
			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+エラー+'</p>');
		}
	});
});
