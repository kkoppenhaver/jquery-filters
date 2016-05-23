(function($) {

    $.fn.filters = function(options) {
    	// Grab whatever container the plugin was init'ed on
    	var $filters_container = $(this);

    	// If the filters array ever needs default options, here's where they'll go
    	filterInfo = $.extend({

    	}, options);

    	// Grab the items container
    	var $itemsContainer = $(filterInfo.container);

    	// Init the var, we'll need it later when we store the original HTML
    	var originalHTML;
      
      // Loop through each filter in the container
      // Make sure we return the each so that methods can be chained
      return this.children().each(function(){
      	
      	var $filter = $(this);

      	// Adding a click event on each filter
      	$filter.click(function(){
      		// Grab the current filter from the clicked item
      		var cur_filter = $filter.data('filter');

      		if(!originalHTML){
      			// Store the original HTML in case the filters are reset
    				originalHTML = $itemsContainer.html();
      		}

      		// Add the overlay
      		$itemsContainer.append('<div class="overlay"></div>')

      		// Add CSS props to the overlay
      		$itemsContainer.children('.overlay')
      			.css('background-color', 'white')
      			.css('opacity', '.7')
      			.css('position', 'absolute')
      			.css('top', 0)
      			.css('left', 0)
      			.css('width', '100%')
      			.css('height', '100%');

      		// If the filter isn't active, activate it and perform the action
      		if(!$filter.hasClass('active')){
						// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');

						// Add an active class to the filter that was clicked
      			$filter.addClass('active');

      			// Execute the correct filter
      			filterInfo.filters[cur_filter]($filter); 
      		}
      		// Else the filter was already active, we don't need to run the action again
      		else {
      			// Get rid of any existing active classes
      			$filters_container.children().removeClass('active');

      			// Reset the container to the original HTML
      			$itemsContainer.html(originalHTML);
      		}

      		// Remove the overlay after the filter is done firing
      		$itemsContainer.children('.overlay').remove()  	

      	});

      });

    }

}(jQuery));