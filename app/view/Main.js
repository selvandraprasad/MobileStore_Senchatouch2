Ext.define('MobileApp.view.Main',{
	extend:	'Ext.navigation.View',
	xtype:	'mainpanel',
	requires:[
			'MobileApp.view.MobileList',
			'MobileApp.view.MobileDetail',
			'MobileApp.view.MobilePurchase'
	],
	config:{
		items:[{
			xtype:	'mobilelist'
		}]
	}
		

});
   
