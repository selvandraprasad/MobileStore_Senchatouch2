Ext.define('MobileApp.view.MobileList',{
	extend:	'Ext.List',
	xtype:	'mobilelist',
	requires:['MobileApp.store.Mobiles'],
	
	config:{
		title:	'Mobile collections',
		grouped: true,
		indexBar: true,
		itemTpl: '{modelName} {compName}',
		store: 	'Mobiles',
		onItemDisclosure: true,
		items: [
        {
            xtype:'toolbar',
             docked:'bottom',
			title:'XYZ Mobile Store'
        }]
	}
});
   
