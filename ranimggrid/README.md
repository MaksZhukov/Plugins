This plugin is designed for beautiful placement in the grid of your images.


You need to connect jquery from version 1.7.

&lt;script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"&gt;&lt;/script&gt;

To make the plugin work well, you need to connect the css library animation.css

&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"&gt;


To run the plugin you need to connect it to your list in which there are images

&lt;ul&gt;
        &lt;li&gt;&lt;img src="..."&gt;&lt;/li&gt;
        ...
&lt;/ul&gt;


jQuery('...').randomImageGrid(option);



Plugin Options:

rowsNumber: (number) - count rows <br>
colsNumber: (number) - count cols <br>
speed: (number ms) - speed animation <br>
effectDuration: (number ms) - speed effect <br>
effectAdd: (name effect any of animation.css or random) - appearance effect <br>
effectRemove: (name effect any of animation.css or random) - fading effect <br>
singleResponsive: (bool) - one column if width device < 768 px and true <br>

