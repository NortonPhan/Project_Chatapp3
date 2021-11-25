function start()
{
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    console.log("Logged In!");
    window.location = "Kwitter_room.html";
}