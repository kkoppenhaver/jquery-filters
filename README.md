# jQuery Filters
================
This is a simple jQuery plugin to allow custom filters to be specified for various types of content.

## Usage

You can define your filters in any container that you like.  For example:
```html
<div class="row filters">
	<div id="category-1" class="col-xs-2 filter" data-filter="category" data-filter-param="category-1">Category 1</div>
	<div id="category-2" class="col-xs-2 filter" data-filter="category" data-filter-param="category-2">Category 2</div>
	<div id="category-3" class="col-xs-2 filter" data-filter="category" data-filter-param="category-3">Category 3</div>

	<div id="tag-1" class="col-xs-2 filter" data-filter="tag" data-filter-param="tag-1">Tag 1</div>
	<div id="tag-2" class="col-xs-2 filter" data-filter="tag" data-filter-param="tag-2">Tag 2</div>
	<div id="tag-3" class="col-xs-2 filter" data-filter="tag" data-filter-param="tag-3">Tag 3</div>
</div>
```

Then call the plugin on those filters.  Container is the container where the results of the filter should be inserted and filter is the filter jQuery object of the filter that was clicked.

```javascript
$('.filters').filters({
	container: '.posts',
	filters: {
	  category: function(filter){
		  // Filter logic goes here
	  },
	  tag: function(filter){
		  // Filter logic goes here
	  }
	}
});
```
## Examples

Examples to come

## Contributing

Contributing Details to Come
