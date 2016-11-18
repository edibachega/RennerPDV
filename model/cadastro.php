<?php

$sql = "insert into produtos (codigo, nome, marca, preco, quantidade) 
        VALUES ('".$_POST['codigo']."','".$_POST['nome']."','".$_POST['marca']."','".$_POST['valor']."','".$_POST['quantidade']."')";

echo $sql;
