Ext.define('MobileApp.controller.Main',{
	extend:	'Ext.app.Controller',

	
	config:{
		refs:{
			main: 'mainpanel',
			mobileDetail: 'mobiledetail' 
		},
		control: {
			'mobilelist':{
				disclose: 'showDetail'
					} ,
			'mobiledetail':{
				disclose: 'mobilePurchase'
			}
		},
	},
	 
	mobilePurchase: function(list,record){
		console.log('asdasdads');
	},
	showDetail: function(list, record){
			 
			this.getMain().push({
				xtype: 'mobiledetail',
				title: record.detailHeader(),
				data: record.data
			});
		}
});
   
