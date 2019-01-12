(function() {
	$('.menu .nav>li').on('click', function() {
		$(this).siblings().find('a').removeClass('active');
		$(this).find('a').addClass('active');
	});

	function byId(id) {
		return typeof id === 'string' ? document.getElementById(id) : id;
	}

	var index = 0,
		timer = null,
		pics = byId('banner').getElementsByTagName('div'),
		dots = byId('dots').getElementsByTagName('span'),
		prev = byId('prev'),
		next = byId('next'),
		len = pics.length;

	function slideImg() {
        var main = byId('banner-box');
		main.onmouseover = function() {
			//清除定时器
			if (timer) clearInterval(timer);
		};
		main.onmouseout = function() {
			timer = setInterval(function() {
				index++;
				if (index >= len) {
					index = 0;
				}
				changeImg();
			}, 3000);
		};
		//自动触发
		main.onmouseout();
		//遍历   绑定事件    点击圆点切换图片
		for (var d = 0; d < len; d++) {
			dots[d].id = d;
			dots[d].onclick = function() {
				//改变index为span的ID值
				index = this.id;

				//调用changeimg
				changeImg();
			};
		}
		//下一张
		next.onclick = function() {
			index++;
			if (index >= len) index = 0;
			changeImg();
		};
		//上一张
		prev.onclick = function() {
			index--;
			if (index < 0) index = len - 1;
			changeImg();
		};
	}
	//切换图片
	function changeImg() {
		//遍历DIV  隐藏
		for (var i = 0; i < len; i++) {
			pics[i].style.display = 'none';
			dots[i].className = '';
		}
		pics[index].style.display = 'block';
		dots[index].className = 'active';
	}
	slideImg();
})();
