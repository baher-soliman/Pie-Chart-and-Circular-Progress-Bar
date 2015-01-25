Pie-Chart-and-Circular-Progress-Bar
===================================
Two lightweight JQuery plugins.
The first is a pie chart that can display statistics for several items in a pie chart view.
And the other is a circular progress bar that shows the progress in percentage for a certain item in a circular bar view instead of the normal horizontal bar.
<hr/>
<h2>Circular Progress Bar</h2>
Create Empty div and give it an id:<br/>
&lt;div id="pie1"&gt;&lt;/div&gt;
<br/><br/>
Then call the plugin like this example:<br/>
&lt;script&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;$("#pie1").pie({<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valuePercentage: "25",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radius: 100,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderWidth: 100,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fillColor: "Yellow",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderColor: "Green",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emptyFillColor: "Red",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emptyBorderColor: "#ddd",<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hideValue: false<br/>
&nbsp;&nbsp;&nbsp;&nbsp;});<br/>
    &lt;/script&gt;
<br/><br/>
The result should look like this image:<br/>
<img Width="250px" src="CircularProgressBar.png" />
<br/><br/>
The following image explains the settings properties of the plugin:<br/>
<img src="CircularProgressBarIllustration.png" />
