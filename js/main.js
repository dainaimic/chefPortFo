const clock = document.querySelector('.clock')
const time = document.querySelector(".time_")

const timeNday = {
    full:new Date(),//get time
    hour:()=>{//adjust hour to regular and not military time
        return timeNday.full.getHours() % 12
    },
    min:()=>{//adjust minutes to display double digits
        if(JSON.stringify(timeNday.full.getMinutes()).length < 2){
            return '0'+timeNday.full.getMinutes()
        }else{
    return timeNday.full.getMinutes()
        }
},

    day:()=>{
        switch(timeNday.full.getDay()){
            case 0:return 'Sun.'; break;
            case 1:return 'Mon.'; break;
            case 2:return 'Tue.'; break;
            case 3:return 'Wed.'; break;
            case 4:return 'Thu.'; break;
            case 5:return 'Fri.'; break;
            case 6:return 'Sat.'; break;
        }},
    
    partOfDay:()=>{//function to see if it is AM or PM time
        if(timeNday.full.getHours()<23 && timeNday.full.getMinutes()<59
        && timeNday.full.getHours()>=12){
            return 'PM'
        }else{
            return "AM"
        }
    },

    year:()=>{return timeNday.full.getFullYear()},
    month:()=>{
        switch(timeNday.full.getMonth()){
            case 0:return 'January'; break;
            case 1:return 'Febuary'; break;
            case 2:return 'March'; break;
            case 3:return 'April'; break;
            case 4:return 'May'; break;
            case 5:return 'June'; break;
            case 6:return 'July'; break;
            case 7:return 'August'; break;
            case 8:return 'September'; break;
            case 9:return 'October'; break;
            case 10:return 'November'; break;
            case 11:return 'December'; break;
            
        }
    },

    date:()=>{return timeNday.full.getDate()}
}//END OF TIME OBJECT



async function showTime(){
        try{
        clock.innerHTML = `${timeNday.hour()}:${timeNday.min()}${timeNday.partOfDay()}, ${timeNday.day()} ${timeNday.month()} ${timeNday.date()} ${timeNday.year()}`
            time.title = timeNday.full
        
        setTimeout(()=>{
                clock.innerHTML = ''
                time.title = 'Show Time...'

            },10000)
            
        }

        catch(err){
            throw new Error(err)
        }
}