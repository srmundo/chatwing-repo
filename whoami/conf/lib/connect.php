<?php
$host = 'localhost';
$user = '';
$pass = '';
$db = 'chatwing_db';

$connect = mysqli_connect($host, $user, $pass, $db);

if ($connect) {
    echo 'Conexion establecida';
}else{
    echo 'Error en la conexion';
}