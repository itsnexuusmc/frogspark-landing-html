<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Cycle Essence</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Import stylesheet -->
	<link rel="stylesheet" href="style.css">
	<!-- Import jQuery -->
	<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<!-- Import minified JavaScript file -->
	<script src="assets/js/scripts.min.js"></script>
</head>
<!-- Add class to body for page transition -->
<body class="do-page-transition">

	<div class="page-transition">
		<div class="bike-wrap">
			<!-- Get the loader -->
			<?php echo file_get_contents('./assets/img/loader.svg'); ?>
		</div>
	</div>
	
	<header class="header">
		<div class="wrapper">
			<div class="flex-wrapper">
				<div class="header__content">

					<!-- Get the logo -->
					<a href="/"><?php echo file_get_contents('./assets/img/logo.svg'); ?></a>

					<div class="header__end-content">
						<p class="header__address">Street Name, Nottingham, NG1 4GY</p>
						<a href="mailto:info@cycleessence.co.uk" class="header__email">INFO<span>@</span>CYCLEESSENCE.CO.UK</a>
					</div>
				</div>
			</div>
		</div>
	</header>