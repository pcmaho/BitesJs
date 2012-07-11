Scorebox = BaseEntity.extend({
	defaults: {
		'score' : 0,
		'lives' : 0,
		'name' : ''
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, DOM, Text");
		var infoText = model.get('name') + " --> &nbsp&nbsp&nbsp Lives: " + model.get('lives') + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +  model.get('score');
    	entity
            .attr({x: 0, y: 0, z: 1, w: gameContainer.conf.get('stageWidth')})
            .text(infoText)
            .textColor('#000')
            .textFont({'size' : '24px', 'family': 'Arial'})
			.css({'text-align': 'right'})
            .bind('Click', function(){
                                
            })

    	model.set({'entity' : entity });
    }
});