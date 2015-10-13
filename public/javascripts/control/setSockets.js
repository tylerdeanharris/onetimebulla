
var socket = io.connect("http://onetime1.herokuapp.com/");
var setSockets = function (socket) {
    socket.emit("buttonPressed", {myName: "nobutton"});
    socket.on('nowBuilding', function (builder) {
        Object.keys(builder.myDevices).forEach(function (device) {
            allDevices[device] = builder.myDevices[device];
        });

        refreshView();
        roomStatusDisplayController();
        location.currentRoom = builder.myPosition;
        updateLocationIcon(location.currentRoom);
    });


    socket.on('connect', function () {
        console.log("connected to client");
    });
};

