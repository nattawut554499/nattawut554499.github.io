var timetable = {
    "Monday": [
        { period: 1, startTime: "08:00", endTime: "08:40", room: "القرآن" },
        { period: 2, startTime: "08:40", endTime: "09:20", room: "3/2" },
        { period: 3, startTime: "09:20", endTime: "10:00", room: "" },
        { period: 4, startTime: "10:00", endTime: "10:55", room: "6/3" },
        { period: 5, startTime: "10:55", endTime: "11:35", room: "3/2" },
        { period: 6, startTime: "11:35", endTime: "12:15", room: "1/3" },
        { period: 7, startTime: "13:40", endTime: "14:20", room: "4/1" },
        { period: 8, startTime: "14:20", endTime: "15:00", room: "" },
        { period: 9, startTime: "15:00", endTime: "15:40", room: "" },
        { period: 0, startTime: "12:15", endTime: "13:40", room: "break" }
    ],
    "Tuesday": [
        { period: 1, startTime: "08:00", endTime: "08:40", room: "القرآن" },
        { period: 2, startTime: "08:40", endTime: "09:20", room: "6/1" },
        { period: 3, startTime: "09:20", endTime: "10:00", room: "3/1" },
        { period: 4, startTime: "10:00", endTime: "10:55", room: "5/1" },
        { period: 5, startTime: "10:55", endTime: "11:35", room: "" },
        { period: 6, startTime: "11:35", endTime: "12:15", room: "" },
        { period: 7, startTime: "13:40", endTime: "14:20", room: "" },
        { period: 8, startTime: "14:20", endTime: "15:00", room: "" },
        { period: 9, startTime: "15:00", endTime: "15:40", room: "" },
        { period: 0, startTime: "12:15", endTime: "13:40", room: "break" }
    ],
    "Wednesday": [
        { period: 1, startTime: "08:00", endTime: "08:40", room: "القرآن" },
        { period: 2, startTime: "08:40", endTime: "09:20", room: "" },
        { period: 3, startTime: "09:20", endTime: "10:00", room: "6/2" },
        { period: 4, startTime: "10:00", endTime: "10:55", room: "" },
        { period: 5, startTime: "10:55", endTime: "11:35", room: "3/3" },
        { period: 6, startTime: "11:35", endTime: "12:15", room: "" },
        { period: 7, startTime: "13:40", endTime: "14:20", room: "2/3" },
        { period: 8, startTime: "14:20", endTime: "15:00", room: "5/2" },
        { period: 9, startTime: "15:00", endTime: "15:40", room: "1/2" },
        { period: 0, startTime: "12:15", endTime: "13:40", room: "break" }
    ],
    "Thursday": [
        { period: 1, startTime: "08:00", endTime: "08:40", room: "القرآن" },
        { period: 2, startTime: "08:40", endTime: "09:20", room: "" },
        { period: 3, startTime: "09:20", endTime: "10:00", room: "1/4" },
        { period: 4, startTime: "10:00", endTime: "10:55", room: "" },
        { period: 5, startTime: "10:55", endTime: "11:35", room: "" },
        { period: 6, startTime: "11:35", endTime: "12:15", room: "5/3" },
        { period: 7, startTime: "13:40", endTime: "14:20", room: "2/2" },
        { period: 8, startTime: "14:20", endTime: "15:00", room: "2/1" },
        { period: 9, startTime: "15:00", endTime: "15:40", room: "" },
        { period: 0, startTime: "12:15", endTime: "13:40", room: "break" }
    ],
    "Friday": [
        { period: 1, startTime: "08:00", endTime: "08:40", room: "القرآن" },
        { period: 2, startTime: "08:40", endTime: "09:20", room: "" },
        { period: 3, startTime: "09:20", endTime: "10:00", room: "4/2" },
        { period: 4, startTime: "10:00", endTime: "10:55", room: "" },
        { period: 5, startTime: "10:55", endTime: "11:35", room: "" },
        { period: 6, startTime: "11:35", endTime: "12:15", room: "1/1" },
        { period: 7, startTime: "13:40", endTime: "14:20", room: "3/4" },
        { period: 8, startTime: "14:20", endTime: "15:00", room: "" },
        { period: 9, startTime: "15:00", endTime: "15:40", room: "" },
        { period: 0, startTime: "12:15", endTime: "13:40", room: "break" }
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
