(function($) {

    $.fn.filters = function(options) {
    	// Grab whatever container the plugin was init'ed on
    	var $filters_container = $(this);

    	// If the filters array ever needs default options, here's where they'll go
    	filters = $.extend({

    	}, options);
      
      // Loop through each filter in the container
      // Make sure we return the each so that methods can be chained
      return this.children().each(function(){
      	
      	var $filter = $(this);

      	// Adding a click event on each filter
      	$filter.click(function(){
      		var cur_filter = $filter.data('filter');

      		// If the filter isn't active, activate it and perform the action
      		if(!$filter.hasClass('active')){
						// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');

						// Add an active class to the filter that was clicked
      			$filter.addClass('active');

      			//Execute the correct filter
      			filters[cur_filter]()   	
      		}
      		// Else the filter was already active, we don't need to run the action again
      		else {
      			// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');
      		}

      	});

      });

    }

}(jQuery));