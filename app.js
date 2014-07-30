Ext.application({
    name: 'MobileApp',
	
	
	controllers: ['Main'],
	views:	['Main'],
	stores: ['Mobiles'],
	models: ['Mobile'],
     
    launch: function () {
		
	  
	  var mainContainer = {
            xtype: "mainpanel"
        };
       var purchaseScreen = {
            xtype: "mobilepurchase"
        }; 
		
	  Ext.Viewport.add([mainContainer,purchaseScreen]);
	 
    }
});
