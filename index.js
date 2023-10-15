var room;
const obj = {
    "room1": {
        name: "Studio Room",
        price: 800,
        img: "auto",
        type: "Studio"
    },
    "room2": {
        name: "Sweet Room",
        price: 1200,
        img: "etoon",
        type: "Sweet"
    },
    "room3": {
        name: "Deluxe Room",
        price: 2000,
        img: "pin",
        type: "Premium"
    }
};
$(document).ready(() => {
    // room = obj.result
    var html = '';
    for (let room_name in obj) {
        console.log(room_name)
        html += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/${obj[room_name].img}.jpg" class="card-img-top" style="width: 260px; height: 200px;">
                            <h2 class="card-title">${obj[room_name].name}</h2>
                            <p>ราคา: ${obj[room_name].price}</p>
                            <input type="submit" class="btn btn-outline-primary" value="Book Now!">
                        </div>
                    </div>
                </div>
                `;
    }
    $("#roomlist").html(html);
})

function searchRoom(type) {
    var key = $("#" + type.id).val();
    console.log(key);
    var html = '';
    for (let room_name in obj) {
        if (obj[room_name].name.toLowerCase().includes(key.toLowerCase())) {
            html += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/${obj[room_name].img}.jpg" class="card-img-top" style="width: 260px; height: 200px;">
                            <h2 class="card-title">${obj[room_name].name}</h2>
                            <p>ราคา: ${obj[room_name].price}</p>
                            <input type="submit" class="btn btn-outline-primary" value="Book Now!">
                        </div>
                    </div>
                </div>
            `;
        }
    }
    if (html == '') {
        $("#roomlist").html('<p>ไม่พบห้องที่ค้นหา</p>');
    } else {
        $("#roomlist").html(html);
    }
}

function selectType(type) {
    var html = '';
    for (let room_name in obj) {
        if (obj[room_name].type.toLowerCase() == type.toLowerCase()) {
            html += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/${obj[room_name].img}.jpg" class="card-img-top" style="width: 260px; height: 200px;">
                            <h2 class="card-title">${obj[room_name].name}</h2>
                            <p>ราคา: ${obj[room_name].price}</p>
                            <input type="submit" class="btn btn-outline-primary" value="Book Now!">
                        </div>
                    </div>
                </div>
            `;
        }
    }
    $("#roomlist").html(html);
}