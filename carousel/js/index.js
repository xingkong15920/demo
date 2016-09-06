window.onload = function() {
	var box = $('#box');
	var imgs = $('img',box);
	imgs[0].style.cssText = 'left:0;top:0;'
	console.log(box,imgs);
	var w = box.clientWidth;
	var h = box.clientHeight;
	var m = 0;
	var n = 0;
	console.log(w);
//	box.onclick = function() {
//		fn('top','left',h);
//	}
	var isTrue = false;
	function fn(obj,objj,attr){
		isTrue = true;
		m = n;
		n++;
		if(n < 0){
			n = imgs.length
		}
		if(n >= imgs.length){
			n = 0;
		}
//		imgs[m].style.zIndex = '3';
//		imgs[n].style.zIndex = '2';
		mTween(imgs[m],obj,-attr,500,'linear');
		imgs[n].style[obj] = attr + 'px';
		imgs[n].style[objj] = '0px';
		mTween(imgs[n],obj,0,500,'linear',function(){
			isTrue = false;
		});
		//console.log(m,n);
	}
	document.onkeydown = function(e) {
		if(!isTrue){
			if(e.which == 37){
				fn('left','top',w);
			}
			if(e.which == 39){
				fn('left','top',-w);
			}
			if(e.which == 38){
				fn('top','left',h);
			}
			if(e.which == 40){
				fn('top','left',-h);
			}
		}
	}
}
