var sumRooms = function() {
    if(allDevices.light01 !== null) {
        Object.keys(allDevices).forEach(function (device) {
            if (device === rooms[allDevices[device].room].things[0]) {
                var newEnergyArray = [];
                var myroom = allDevices[device].room;
                for (var thisDevice in allDevices) {
                    if (myroom === allDevices[thisDevice].room && device !== thisDevice) {
                        rooms[allDevices[device].room].energyConsumption = allDevices[device].dailyEnergyArray;
                        for (var i = 0; i < allDevices[device].dailyEnergyArray.length; i++) {
                            newEnergyArray.push(rooms[allDevices[device].room].energyConsumption[i] +
                            allDevices[thisDevice].dailyEnergyArray[i]);
                            console.log(allDevices[device].room + "1:" +  sumElements( rooms[allDevices[device].room].energyConsumption));
                            console.log(allDevices[device].room + "2:" +  sumElements(allDevices[thisDevice].dailyEnergyArray));
                        }
                        rooms[allDevices[device].room].energyConsumption = sumElements(newEnergyArray);
                    }
                }
            }
        });
    };
};