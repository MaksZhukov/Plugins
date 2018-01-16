This plugin is designed for beautiful placement in the grid of your images.


You need to connect jquery from version 1.7.

<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>


To make the plugin work well, you need to connect the css library animation.css

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

To run the plug-in you need to connect it to your list in which there are images

<ul>
        <li><img src="..." alt=""></li>
        ...
</ul>

jQuery('...').randomImageGrid(option);



Plugin Options:

rowsNumber: (number) - count rows
colsNumber: (number) - count cols
speed: (number ms) - speed animation
effectDuration: (number ms) - speed effect
effectAdd: (name effect any of animation.css or random) - appearance effect 
effectRemove: (name effect any of animation.css or random) - fading effect
singleResponsive: (bool) - one column if width device < 768 px and true

