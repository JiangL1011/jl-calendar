if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '????';
	$.fn.pagination.defaults.afterPageText = '?? {pages}';
	$.fn.pagination.defaults.displayMsg = '??? {from} ??? {to} ?? {total} ????';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '??????, ?????? ???????? ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '?????';
	$.messager.defaults.cancel = '?????';
}
$.map(['validatebox','textbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = '??? ????? ?????.';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message = '?????? ????? ???? ???????? ????.';
	$.fn.validatebox.defaults.rules.url.message = '?????? ????? ???? ????.';
	$.fn.validatebox.defaults.rules.length.message = '?????? ????? ???? ??? {0} ? {1}.';
	$.fn.validatebox.defaults.rules.remote.message = '?????? ?????? ?? ?????.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '?????';
	$.fn.datebox.defaults.closeText = '?????';
	$.fn.datebox.defaults.okText = '?????';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
