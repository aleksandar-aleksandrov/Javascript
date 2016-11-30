var SPEED = 1000

var gameTimeData = {
    hour: 1,
    day: 1,
    month: 1,
    year: 1
}

var userData = {
    cash: 100,
    hourlyRate: 1,
    inventory: {}
}

var IncomeBoosts = [
    {
        title: "College Course",
        cost: 50,
        increase: 2,
    },
    {
        title: "Youtube Stream",
        cost: 100,
        increase: 5,
    },
    {
        title: "Udemy Course",
        cost: 200,
        increase: 7,
    },
    
]
//Income functions
function addHourlyIncome(){
    userData.cash += userData.hourlyRate
    constructIncome()
}



//Time Management

var gameTime = setInterval(function(){
    addHour()
}, SPEED)


function addHour(){
    if (gameTimeData.hour !== 24){
        gameTimeData.hour++
    } else {
        gameTimeData.hour = 1
        addDay()
    }
    constructTimeSection()
    addHourlyIncome()
}

function addDay(){
    if (!isEndOfMonth()){
        gameTimeData.day++
    } else {
        gameTimeData.day = 1
        addMonth()
    }
    constructTimeSection()
}

function isEndOfMonth(){
    var endOfMonth = false

    switch(true){
        case(gameTimeData.month === 1 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 2 && gameTimeData.day == 28):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 3 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 4 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 5 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 6 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 7 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 8 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 9 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 10 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 11 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case(gameTimeData.month === 12 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        default:
            endOfMonth = false;
    }

    return endOfMonth
}

function addMonth(){
    if (gameTimeData.month !== 12) {
        gameTimeData.month++
    } else {
        gameTimeData.month = 1
        gameTimeData.year++
    }
    constructTimeSection()
}

constructBoosts();

// Constructor functions
function constructTimeSection(){
    var timeSection = document.getElementById("gameTime")
    var timeMessage = "Hour: " + gameTimeData.hour + " Day: " + gameTimeData.day + " Month: " + gameTimeData.month + " Year: " + gameTimeData.year
    timeSection.innerText = timeMessage;
}

function constructIncome(){
    var incomeContainer = document.getElementById("income")
    var incomeMessage = "Cash: " + userData.cash + " Hourly Rate: " + userData.hourlyRate
    incomeContainer.innerText = incomeMessage
}

function constructBoosts(){
    var list = document.getElementById("powerUpOptions")
    for(var i = 0, len = IncomeBoosts.length; i < len; i++){
        var item = document.createElement('li')
        item.innerText = IncomeBoosts[i].title + ": $" + IncomeBoosts[i].cost
        item.data = IncomeBoosts[i]
        item.onclick = function(){
            if(userData.cash >= this.data.cost){
                userData.cash -= this.data.cost
                userData.hourlyRate += this.data.increase
            }
        }
        list.appendChild(item)
    }
}

