(function($) {

    $.fn.filters = function() {
    	// Grab whatever container the plugin was init'ed on
    	var $filters_container = $(this);
      
      // Loop through each filter in the container
      // Make sure we return the each so that methods can be chained
      return this.children().each(function(){
      	
      	var $filter = $(this);

      	// Adding a click event on each filter
      	$filter.click(function(){
      		if(!$filter.hasClass('active')){
						// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');

						// Add an active class to the filter that was clicked
      			$filter.addClass('active');
      		}
      		else {
      			// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');
      		}      		
      	});

      });

    }

}(jQuery));