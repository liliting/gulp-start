$(function(){	
	var SkliveItem = function(width){
		this.width = width;
	};
	SkliveItem.prototype={
		'init':function(){
			var _this = this,
				optionW = _this.width,
				bodyWidth = $('body').width(),
				space = (bodyWidth - optionW.conWidth)/2 + (optionW.conWidth - optionW.miniWidth * optionW.scale)/2;	

			_this.initStyle(space,optionW.scale);
			_this.changePos(space,optionW.scale);
		},
		'changePos':function(space,scale){
			var _this = this,	
				$el = $(_this.width.el),
				len = $el.length;
			$el.on('click','.sk-live-item',function(){
				var className = $(this).attr('class').split(' ');
				var id = className[1].replace(/[^0-9]/ig,"");
				if(id > 2){
					_this.changeClass(-1);	
				}else if(id < 2){
					_this.changeClass(1);
				}
				_this.initStyle(space,scale);
			});
		},
		'changeClass':function(num){
			var _this = this,
				$el = $(_this.width.el).find('.sk-live-item'),
				len = $el.length;
			$.each($el,function(index,value){	
				var className = $(value).attr('class').split(' ');
				var id = className[1].replace(/[^0-9]/ig,"");
				if(num > 0 ){
					if( id == len ){
						$(value).addClass('p1').removeClass(className[1]);
					}else{
						$(value).addClass('p'+(parseInt(id)+num)).removeClass(className[1]);
					}
				}else{
					if(id == 1){
						$(value).addClass('p'+len).removeClass(className[1]);
					}else{	
						$(value).addClass('p'+(parseInt(id)+num)).removeClass(className[1]);
					}
				}
			});
		},
		'initStyle':function(space,scale){
			var _this = this,
				$el = $(_this.width.el).find('.sk-live-item');
			$.each($el,function(i,value){
				var className = $(value).attr('class').split(' ');
				var id = className[1].replace(/[^0-9]/ig,"");
				if(id != 2){
					var tranX = Math.floor( -150 + space*(id-2) );
					var tranCon = "translateX("+tranX+"px) scale("+scale+")";
					$(value).css({
						"transform":tranCon,
						"-webkit-transform":tranCon,
						"-moz-transform":tranCon,
						"z-index":"0"
					});
				}else{
					$(value).css({
						"transform" : "translateX(-50%)",
						"-webkit-transform" : "translateX(-50%)",
						"-moz-transform" : "translateX(-50%)",
						"z-index" : "1"
					});
				}
			});
		}
	}
	
	var width = {
		el:'.sk-lives-list',
		conWidth:$('.container').width(),
		miniWidth:300,
		scale:0.68
	};
	new SkliveItem(width).init();
});
