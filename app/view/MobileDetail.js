Ext.define('MobileApp.view.MobileDetail',{
	extend:	'Ext.Panel',
	xtype:	'mobiledetail',
	 fullscreen: true,
     layout: 'card',
 	requires:['MobileApp.store.Mobiles'],

	 
	items:[{
	
		 xtype: 'Panel',
		 styleHtmlContent: true,
		 scrollable: 'vertical',
		
		 store: 	'Mobiles',
		 items: [
        
					{
						
							xtype: 'button',
							ui: 'confirm',
							text: 'Buy',
							bottom: '1%',
							style: 'cursor:pointer;',
							  
							handler: function() { console.log('tapped!'); }	
						
					},
					{
						xtype:'toolbar',
						 docked:'bottom',
						title:'XYZ Mobile Store'
					}
		
			]
	}]
	 
	 
	
    
	

		
	 
});
   
