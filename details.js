const data = localStorage.getItem("hotelData")

const hotel = JSON.parse(data)

document.getElementById('hotelTitle').innerText = hotel.name;   
document.getElementById('hotelImage').src = hotel.image || 'default_image.jpg';
document.getElementById('hotelPrice').innerText = hotel.price;
document.getElementById('hotelDescription').innerText = hotel.description || 'No description available';
const reserveButton = document.getElementById('reserveButton')
reserveButton.addEventListener("click", function(){
    alert("Reservation cost is: " + hotel.price)
});    