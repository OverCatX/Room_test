<?php
    include "api/connect.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
    <title>Hotel</title>
</head>

<body>
    <!-- Header -->
    <div class="container mt-3">
        <div class="row text-center justify-content-center">
            <h3>Room</h3>
        </div>
    </div>

    <!-- Rooms -->
    <div class="container mt-3">
        <div class="row">
            <!-- Menu -->
            <div class="col-md-3">
                <div class="card" style="border-radius: 20px;">
                    <div class="card-body">
                        <h4 class="text-center">ค้นหาห้อง</h4>
                        <input onkeyup="searchRoom(this)" type="text" id="txtsearch"
                            class="sidebar-search d-block w-100" style="border-radius: 10px"
                            placeholder="Search something...">
                        <div class="row mt-2">
                            <button onclick="selectType('Studio')" class="btn btn-outline-primary" style="border-radius: 20px;">Studio Room</button>
                        </div>
                        <div class="row mt-2">
                            <button onclick="selectType('Sweet')" class="btn btn-outline-danger" style="border-radius: 20px;">Sweet Room</button>
                        </div>
                        <div class="row mt-2">
                            <button onclick="selectType('Premium')" class="btn btn-outline-warning" style="border-radius: 20px;">Premium Room</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Room -->
            <div class="col-md-9">
                <div class="card" style="border-radius: 20px;">
                    <div class="card-body">
                        <div id="roomlist" class="row">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>