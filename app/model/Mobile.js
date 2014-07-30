Ext.define('MobileApp.model.Mobile',{
	extend:	'Ext.data.Model',

	
	config:{
		fields: ['compName','modelName','description']
	},
	
	detailHeader: function(){
		var res =  this.data,
		names = [res.compName,' > ',
				res.modelName
				];
		return names.join(" ");
	}
});
   
