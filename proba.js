$(document).ready(function() {
    $.ajax({
        url: "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8"
    }).then(function(data) {
       $('.rand').append(data.data);
    });
});