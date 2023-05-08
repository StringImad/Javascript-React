<?php
header("Access-Control-Allow-Origin: *");
$_POST = json_decode(file_get_contents("php://input"), true);

try {
    $conexion = new PDO("mysql:host=localhost;dbname=gestion_pantallas", "jose", "josefa", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
} catch (PDOException $e) {
    die("<p>Failed to connect" . $e->getMessage() . "</p></body></html>");
}

try {
    $consulta = "SELECT * FROM usuarios WHERE user = ? AND password = ?";
    $sentencia = $conexion->prepare($consulta);
    $datos[] = $_POST["user"];
    $datos[] = $_POST["password"];
    $sentencia->execute($datos);

   if ($sentencia->rowCount() > 0) {
    $usuario = $sentencia->fetch(PDO::FETCH_ASSOC);
    if ($_POST["user"] == $usuario['user'] && $_POST["password"] == $usuario['password']) {
        $respuesta["usuario"] = $usuario['tipo'];
        $respuesta["mensaje"] = "Acceso correcto";
    } else {
        $respuesta["mensaje"] = "Acceso incorrecto";
    }
} else {
    $respuesta["mensaje"] = "Acceso incorrecto";
}
} catch (PDOException $e) {
    $sentencia = null;
    $conexion = null;
    die("<p>Failed to connect" . $e->getMessage() . "</p></body></html>");
}

header("Content-Type: application/json");
echo json_encode($respuesta);
?>

