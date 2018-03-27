# markdown.vimeo.playbase

This "helper" is currently under development and NOT ready to use.




# Two different Scripts with the same "API"

This scripts was created to integrate vimeo videos with markdown in the Grave CMS. It´s the combination of the best things in the internet :-) Grav-Markdown-Vimeo and it´s easy to use.

## playbase_simple

The simple script integrates an easy way to embed vimeo videos on your page even it just supports markdown. 

### Embed Code

	<script src="path-to/playbase_simple.min.js"></script>

You can also embed the code inline of these files.

	<script>copy-the-file-content-here</script>

## playbase_advanced

The biggest advantage of the advanced player is the integration of the vimeo JS-player-API to do some more features.

+ play in a list one after the next
+ switch from one playlist to the next on the same page

### Embed Code

	<script src="path-to/playbase_advanced.min.js"></script>

You can also embed the code inline of these files.

	<script>copy-the-file-content-here</script>


# Prepare the content

## Markdown

The easyest way to use this playbase is with markdown.

	[Name or title of the video](https://vimeo.vom/123)

+ 123 is your id of an video
+ no need of special definitions
+ every link to vimeo is detected and turned into a player

To define a playlist simply build a list of links

	<vimeo class="PlayBase"></vimeo>
	+ [Name or title of the video](https://vimeo.vom/123)
	+ [Name or title of the video](https://vimeo.vom/456)

+ 123 or 456 is your id of an video
+ no need of special definitions
+ every link to vimeo is detected and turned into a player with a playlist

## HTML

You can use this playbase also with raw HTML

	<a href="https://vimeo.vom/123">Name or title of the video</a>

+ 123 is your id of an video
+ no need of special definitions
+ every link to vimeo is detected and turned into a player

To define a playlist simply build a list of links

	<vimeo class="PlayBase"></vimeo>
	<ul>
		<li>
			<a href="https://vimeo.vom/123">Name or title of the video</a>
		</li>
		<li>
			<a href="https://vimeo.vom/456">Name or title of the video</a>
		</li>
	</ul>

+ 123 or 456 is your id of an video
+ no need of special definitions
+ every link to vimeo is detected and turned into a player with a playlist