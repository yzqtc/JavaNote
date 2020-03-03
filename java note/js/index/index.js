$(function(){
	$("[id^='span_']").click(function(){
		var id = this.id.split('_')[1];
		var table = $('#table_'+id).css('display');
		if(table == 'none'){
			$('#table_'+id).slideDown(1000);
		}else{
			$('#table_'+id).slideUp(1000);
		}
	});
});
