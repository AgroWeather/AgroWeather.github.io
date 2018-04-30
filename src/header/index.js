const empty = require('empty-element')
const yo = require('yo-yo')

empty(document.getElementById('header-container')).appendChild(yo`<nav>
	<div class="nav-wrapper">
		<ul id="slide-out" class="side-nav">
			<li>
				<div class="user-view">
					<div class="background">
						<img src="">
					</div>
					<a href="#!user"><img class="circle" src=""></a>
					<a href="#!name"><span class="white-text name">John Doe</span></a>
					<a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
		    	</div>
		    </li>
		    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
		    <li><a href="#!">Second Link</a></li>
		    <li><div class="divider"></div></li>
		    <li><a class="subheader">Subheader</a></li>
		    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
		</ul>
		<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
		<a href="#" class="brand-logo">AGRWEATHER</a>
		<ul id="nav-mobile" class="right hide-on-med-and-down">
			<li><a href="sass.html">Sass</a></li>
			<li><a href="badges.html">Components</a></li>
			<li><a href="collapsible.html">JavaScript</a></li>
		</ul>
	</div>
</nav>`)

$(".button-collapse").sideNav();