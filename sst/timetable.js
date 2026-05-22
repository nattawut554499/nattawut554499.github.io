var timetable = {
    "Monday": [
        { period: 1, startTime: "08:10", endTime: "09:00", room: "" },
        { period: 2, startTime: "09:00", endTime: "09:50", room: "" },
        { period: 3, startTime: "09:50", endTime: "10:40", room: "" },
        { period: 4, startTime: "10:40", endTime: "11:30", room: "" },
        { period: 5, startTime: "11:30", endTime: "12:10", room: "" },
        { period: 6, startTime: "13:20", endTime: "14:00", room: "" },
        { period: 7, startTime: "14:00", endTime: "14:40", room: "" },
        { period: 8, startTime: "14:40", endTime: "15:20", room: "" },
        { period: 9, startTime: "15:20", endTime: "16:00", room: "" },
        { period: 0, startTime: "12:10", endTime: "13:20", room: "break" }
    ],
    "Tuesday": [
        { period: 1, startTime: "08:10", endTime: "09:00", room: "" },
        { period: 2, startTime: "09:00", endTime: "09:50", room: "" },
        { period: 3, startTime: "09:50", endTime: "10:40", room: "" },
        { period: 4, startTime: "10:40", endTime: "11:30", room: "" },
        { period: 5, startTime: "11:30", endTime: "12:10", room: "" },
        { period: 6, startTime: "13:20", endTime: "14:00", room: "" },
        { period: 7, startTime: "14:00", endTime: "14:40", room: "" },
        { period: 8, startTime: "14:40", endTime: "15:20", room: "" },
        { period: 9, startTime: "15:20", endTime: "16:00", room: "" },
        { period: 0, startTime: "12:10", endTime: "13:20", room: "break" }
    ],
    "Wednesday": [
        { period: 1, startTime: "08:10", endTime: "09:00", room: "" },
        { period: 2, startTime: "09:00", endTime: "09:50", room: "" },
        { period: 3, startTime: "09:50", endTime: "10:40", room: "" },
        { period: 4, startTime: "10:40", endTime: "11:30", room: "" },
        { period: 5, startTime: "11:30", endTime: "12:10", room: "" },
        { period: 6, startTime: "13:20", endTime: "14:00", room: "" },
        { period: 7, startTime: "14:00", endTime: "14:40", room: "" },
        { period: 8, startTime: "14:40", endTime: "15:20", room: "" },
        { period: 9, startTime: "15:20", endTime: "16:00", room: "" },
        { period: 0, startTime: "12:10", endTime: "13:20", room: "break" }
    ],
    "Thursday": [
        { period: 1, startTime: "08:10", endTime: "09:00", room: "" },
        { period: 2, startTime: "09:00", endTime: "09:50", room: "" },
        { period: 3, startTime: "09:50", endTime: "10:40", room: "" },
        { period: 4, startTime: "10:40", endTime: "11:30", room: "" },
        { period: 5, startTime: "11:30", endTime: "12:10", room: "" },
        { period: 6, startTime: "13:20", endTime: "14:00", room: "" },
        { period: 7, startTime: "14:00", endTime: "14:40", room: "" },
        { period: 8, startTime: "14:40", endTime: "15:20", room: "" },
        { period: 9, startTime: "15:20", endTime: "16:00", room: "" },
        { period: 0, startTime: "12:10", endTime: "13:20", room: "break" }
    ],
    "Friday": [
        { period: 1, startTime: "08:10", endTime: "09:00", room: "" },
        { period: 2, startTime: "09:00", endTime: "09:50", room: "" },
        { period: 3, startTime: "09:50", endTime: "10:40", room: "" },
        { period: 4, startTime: "10:40", endTime: "11:30", room: "" },
        { period: 5, startTime: "11:30", endTime: "12:10", room: "" },
        { period: 6, startTime: "13:20", endTime: "14:00", room: "" },
        { period: 7, startTime: "14:00", endTime: "14:40", room: "" },
        { period: 8, startTime: "14:40", endTime: "15:20", room: "" },
        { period: 9, startTime: "15:20", endTime: "16:00", room: "" },
        { period: 0, startTime: "12:10", endTime: "13:20", room: "break" }
    ]
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now = new Date();
// const now = new Date("Fri Oct 31 2025 15:26:38 GMT+0700 (Indochina Time)");
const today = days[now.getDay()];

function getCurrentPeriod(timetable) {

    var schedule = timetable[today];
    if (!schedule) return null
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    for(period of schedule) {
        if(currentTime >= period.startTime && currentTime <= period.endTime){
            return period
        }
    }
    return null
}


function setColor(currentPeriod){
    switch(currentPeriod.period){
        case 0:
            var td = document.getElementById("monday-break")
            td.style.backgroundColor = "#ff9800";
            td.style.color = "white";
            break;
        case 1:
            var td = document.getElementById("monday-1")
            td.style.backgroundColor = "#ff9800";
            td.style.color = "white";
            break;
        default:
            var elmementId = `${today.toLocaleLowerCase()}-${currentPeriod.period}`
            var td = document.getElementById(elmementId)
            td.style.backgroundColor = "#ff9800";
            td.style.color = "white";
    }

}

var currentPeriod = getCurrentPeriod(timetable);
if(currentPeriod){
    setColor(currentPeriod);
}
