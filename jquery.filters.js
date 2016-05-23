(function($) {

    $.fn.filters = function() {
    	var $filters_container = $(this);
      
      return this.children().each(function(){
      	
      	var $filter = $(this);

      	$filter.click(function(){
      		$filters_container.children().removeClass('active');

      		$filter.addClass('active');

      	});

      });

    }

}(jQuery));