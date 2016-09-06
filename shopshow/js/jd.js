window.onload = function(){
	//获取box和马赛克
	var box = $('#box');
	var msk = $('#msk');
	//获取box2下的img
	var box2 = $('#box2');
	var bigImg = $('img',box2)[0];
	//console.log(box2,bigImg)
	//鼠标移入box时，msk出现
	box.onmouseover = function() {
		msk.style.display = 'block';
		box2.style.display = 'block';
	}
	//鼠标移动时，msk的坐标等于鼠标的值，减去msk坐标的一半，以保持在中心
	document.onmousemove = function(e){
		//获取box的盒模型信息
		var boxBound = box.getBoundingClientRect();
		//盒模型的left值等于鼠标当前的坐标值，减去box的left值，再减去msk的宽度的一半
		var l = e.clientX - boxBound.left - msk.offsetWidth/2;
		//盒模型的top值等于鼠标当前的坐标值减去box的top值，再减去msk的高度的一半
		var t = e.clientY - boxBound.top - msk.offsetHeight/2;
		//然后判断l的值，让msk不出box的区域
		if(l < 0){
			//如果l小于0，那么l = 0；
			l = 0;
		}else if(l > boxBound.width - msk.offsetWidth){
			//如果l大于box的宽度减去msk的宽度，那么l等于box的宽度减去msk的宽度
			l = boxBound.width - msk.offsetWidth
		}
		//同理来判断t的值，不出范围
		if(t < 0){
			//如果t小于0，那么t = 0；
			t = 0;
		}else if(t > boxBound.height - msk.offsetHeight){
			//如果t大于box的高度减去msk的高度，那么t等于box的高度减去msk的高度
			t = boxBound.height - msk.offsetHeight;
		}
		//console.log(boxBound.height)
		//分别给msk的left和top赋值
		msk.style.left = l + 'px';
		msk.style.top = t + 'px';
		//获取box2的盒模型信息
		var bigBoxBound = box2.getBoundingClientRect();
		//当鼠标移动时，大盒子的图片的位置移动
		//等于盒子的宽度减去img的宽度，然后乘以l除以盒子的宽度
		//根据比例来算。。右边img的left等于左边小盒子的left值对比msk的宽度的比例 再乘以大盒子减去大图的差值
		bigImg.style.left = (bigBoxBound.width - bigImg.offsetWidth) * (l/msk.offsetWidth) +'px';
		//同理来得出top值
		bigImg.style.top = (bigBoxBound.height - bigImg.offsetHeight) * (t/msk.offsetHeight) +'px';
		console.log(bigBoxBound.width - bigImg.offsetWidth);
	}
	//鼠标移出box时，msk消失
	box.onmouseout = function() {
		msk.style.display = 'none';
		box2.style.display = 'none';
	}
}
