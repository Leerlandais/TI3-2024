<?php

function standardClean ($cleanThis) : string | bool {
    $cleaned = htmlspecialchars(strip_tags(trim($cleanThis)));
        return $cleaned;
    }


function simpleTrim ($cleanThis) : string | bool {
    $cleaned = trim($cleanThis);
        return $cleaned;
    }