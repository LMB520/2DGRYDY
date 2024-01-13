var 蒂姆=1;
setInterval("tim++",10);
var autourl=新的数组();
为(我=0；i<=6；i++){
autourl[我]=$('.speedlist p').情商(我).找到(‘A’).attr("href");
}
功能 自动(URL){
	var str=tim；
控制台。日志(str);
	如果(URL==autourl[0]){
		$('#lineMs0').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[1]){
		$('#lineMs1').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[2]){
		$('#lineMs2').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[3]){
		$('#lineMs3').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[4]){
		$('#lineMs4').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[5]){
		$('#lineMs5').超文本标记语言(str+'MS')
	}
	如果(URL==autourl[6]){
		$('#lineMs6').超文本标记语言(str+'MS')
	}
}
功能 跑(){
	为(var 跨度=0；span<autourl。长度；span++){
文件。写("<img src="+autourl[跨度]+"/"+数学。随机()+"width=1height=1onerror=auto('"+autourl[跨度]+"')style='display:none'>");
	}
}
跑()
