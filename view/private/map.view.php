<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php
                    include("inc/cssBS.php");
                    include("../view/shared/leaf.css.php");
                    ?>
        <link rel="stylesheet" href="css/styleAdmin.css">
        <link rel="stylesheet" href="css/colours.css">
        <title><?=$title?></title>
    </head>
    <body>
        <div class="container-fluid px-5 mt-2 h-auto">
            <?php
           include("inc/header.php");
           ?>
        <div class="container text-center">
            <p class="h2">La Carte</p>

           
        </div>
        <div class="row d-flex">
            
            <div class="col-9 ps-5">
                <div id="map" class="mapDiv"></div>
            </div>
            <div class="col-3">
                
                <div class="container text-center"> 
                <p class="h4">Cliquez sur un nom pour le voir sur la carte</p>                   
                <div class="d-flex flex-row">
                    <div class="list-group" id = 'BSListLeft'>
   
                            </div>
                    <div class="list-group" id = 'BSListRight'>
   
                            </div>  
                </div>                  
                    </div>
                </div>
            </div>
</div>
<?php
        include("inc/footer.php");
        ?>
<?php
        include("inc/jsBS.php");
        include("../view/shared/leaf.js.php");
        ?>
<!--  Script Perso  -->
<script src="js/colour.script.js"></script>
<script src="js/map.script.js"></script>
</body>
</html>