$(function(){
	//点击菜单显示隐藏
	$("[id^='span_']").click(function(){
		var id = this.id.split('_')[1];
		var table = $('#table_'+id).css('display');
		if(table == 'none'){
			$('#table_'+id).slideDown(1000);
			$("#span_"+id).html('<svg t="1584538797942" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3719" width="30" height="30"><path d="M826.3 770c0 24.7-20.1 44.7-44.7 44.7h-559l78.3-368.9c0-24.7 19.9-44.7 44.6-44.7h514.3c24.7 0 44.7 20 44.7 44.7L826.3 770zM312 367.5h503.1v-43.9c0-24.7-20.1-44.7-44.7-44.7H502.2v-40.5c0-24.7-20-44.7-44.7-44.7H233.8c-24.7 0-44.7 20-44.7 44.7V770l78.2-357.7c0-24.7 20.1-44.8 44.7-44.8z m0 0" p-id="3720" fill="#8a8a8a"></path></svg>');
		}else{
			$('#table_'+id).slideUp(1000);
			$("#span_"+id).html('<svg t="1584527751385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3256" width="30" height="30"><path d="M165.3 417.3V739c0 22.2 19 40.3 42.4 40.3H815c23.4 0 42.4-18 42.4-40.3V412h-692v5.3z m0 0M815 278.6H519.5v-8.8c0-28.5-23.7-51.6-52.7-51.6H218c-29 0-52.7 23.1-52.7 51.6V368h692.1v-49.1c0-22.3-19-40.3-42.4-40.3z m0 0" p-id="3257" fill="#8a8a8a"></path></svg>');
		}
	});
	//点击子菜单显示隐藏
	$("[id^='childindex_span_']").click(function(){
		var id = this.id.split('_')[2];
		var childtable = $('#childtable_'+id).css('display');
		if(childtable == 'none'){
			$('#childtable_'+id).slideDown(1000);
			$('#childindex_span_'+id).html('<svg t="1584527442733" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2207" width="20" height="20"><path d="M826.3 770c0 24.7-20.1 44.7-44.7 44.7h-559l78.3-368.9c0-24.7 19.9-44.7 44.6-44.7h514.3c24.7 0 44.7 20 44.7 44.7L826.3 770zM312 367.5h503.1v-43.9c0-24.7-20.1-44.7-44.7-44.7H502.2v-40.5c0-24.7-20-44.7-44.7-44.7H233.8c-24.7 0-44.7 20-44.7 44.7V770l78.2-357.7c0-24.7 20.1-44.8 44.7-44.8z m0 0" p-id="2208" fill="#8a8a8a"></path></svg>');
		}else{
			$('#childtable_'+id).slideUp(1000);
			$('#childindex_span_'+id).html('<svg t="1584527751385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3256" width="20" height="20"><path d="M165.3 417.3V739c0 22.2 19 40.3 42.4 40.3H815c23.4 0 42.4-18 42.4-40.3V412h-692v5.3z m0 0M815 278.6H519.5v-8.8c0-28.5-23.7-51.6-52.7-51.6H218c-29 0-52.7 23.1-52.7 51.6V368h692.1v-49.1c0-22.3-19-40.3-42.4-40.3z m0 0" p-id="3257" fill="#8a8a8a"></path></svg>');
		}
	});
	//实现复制功能
	$("[id^='copy_']").click(function(){
		var id = this.id.split("_")[1];
		var str = "#copy_"+id;
		var clipboard = new Clipboard(str);
		// 显示用户反馈/捕获复制/剪切操作后选择的内容
	    clipboard.on('success', function (e) {
	        console.info('Action:', e.action)//触发的动作/如：copy,cut等
	        console.info('Text:', e.text);//触发的文本
	        console.info('Trigger:', e.trigger);//触发的DOm元素
	        e.clearSelection();//清除选中样式（蓝色）
			$("#copy_"+id).css("width","60px").css("left","92%");
        	$("#copy_"+id).html("复制成功");
			setTimeout(function(){
				$("#copy_"+id).css("width","40px").css("left","94%");
				$("#copy_"+id).html("复制");
			},1000);
	   });
	    clipboard.on('error', function (e) {
	    	alert("error");
	        console.error('Action:', e.action);
	        console.error('Trigger:', e.trigger);
	    });
	});
});
