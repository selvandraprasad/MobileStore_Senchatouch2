Ext.define('MobileApp.view.MobilePurchase',{
	extend:	'Ext.Panel',
	xtype:	'mobilepurchase',
	
 	requires:['MobileApp.store.Mobiles'],
 
	config:{
		 styleHtmlContent: true,
		 scrollable: 'vertical',
		 title: 'Mobile Purchase',
		
		 store: 	'Mobiles',
		 tpl: '<div><strong>Brand Name:	</strong>{compName} </div><p></p><div><strong>Model Name:	</strong>{modelName}</div><p></p> <div><strong>Description:	<br><br></strong>{description}</div>',
		 items: [
        
		{
            
				xtype: 'button',
				ui: 'confirm',
				text: 'Buy',
				handler: function(){
					console.log('asdas')
				},
				onItemDisclosure: true,
				bottom: '1%',
				style: 'cursor:pointer;'
				
			
			
        },
		{
            xtype:'toolbar',
             docked:'bottom',
			title:'XYZ Mobile Store'
        }
		
		]
	}
	

		
	 
});
   
