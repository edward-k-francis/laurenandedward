<!DOCTYPE html>
<!--[if IE 7]                  <html class="ie7 no-js"  lang="en-US"     <![endif]-->
<!--[if lte IE 8]>              <html class="ie8 no-js"  lang="en-US"     <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> 
<html class="not-ie no-js" lang="en-US">  <!--<![endif]-->
<?php include('../includes/address.php'); ?>
<head>
    <?php include($root_address.'includes/header_includes.php'); ?>
    <script type="text/javascript" src='<?php echo $link_address;?>includes/themes/js/instagram/instafeed.min-1.3.2.js'></script>
</head>
<body class="home page page-id-4 page-template page-template-page-templatessingle-page-php">
    <div class="page-container">
        <?php include($root_address.'includes/header.php'); ?>
        <div id="lauren-edward-november-14-2014">
            <div class="content">
                <section id="feed">
                    <br />
                    <h3>Our wedding is trending...</h3>
                    <br />
                    <p>We ask that our guests take photos involving our wedding and post them to <a href="http://www.instagram.com" target='_blank' class="icon-instagram">Instagram</a>, <a href="https://www.facebook.com/search/keyword/?q=%23laurenandedward" target="_blank" class='icon-facebook'>Facebook</a>, and <a href="https://twitter.com/search?f=realtime&q=%23laurenandedward" target="_blank" class='icon-twitter'>Twitter</a> using the hastag <b>#laurenandedward</b>.</p>
                    <p>Below are the photos from Instagram.
                    <br />
                    <div id="instafeed"></div>
                </section>
                <?php $photo_credit="Photos from <a href='http://www.instagram.com' target='_blank'>Instagram</a>"; ?>
                <?php include($root_address.'includes/footer.php'); ?>
            </div>
        </div>
        <?php include($root_address.'includes/footer_includes.php'); ?>
        <script type='text/javascript' src='<?php echo $link_address;?>includes/themes/js/feed.js'></script>
    </div>
</body>
</html>