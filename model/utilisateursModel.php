<?php

# Connexion de l'administrateur en utilisant password_verify
function attemptAdminLogin (PDO $db, string $name, string $pass) : bool | string {
    
    $sql = "SELECT *
            FROM `utilisateurs`
            WHERE `username` = ?";

$stmt = $db->prepare($sql);
$stmt->bindValue(1, $name);

try {
    $stmt->execute();
    if($stmt->rowCount()===0) return false;
    $result = $stmt->fetch();
    
    
    if (password_verify($pass, $result['passwd'])) {
        
        $_SESSION = $result;
        unset($_SESSION['passwd']);
        $_SESSION['monID'] = session_id();
        $_SESSION["pageCount"] = 0;
        $_SESSION['showGreeting'] = false;       
        return true;
        
    }else{
        return false;
    }
}catch (Exception $e) {
    return $e->getMessage();
} 
}

# Déconnexion de l'administrateur