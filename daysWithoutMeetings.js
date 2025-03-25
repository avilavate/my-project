var countDays = function(days, meetings) {
    let meetingDays=[];
    meetings.forEach(element => {
        for (let i = element[0]; i <= element[1]; i++) {
            meetingDays.push(i);
        }
    });
    meetingDays=[...new Set(meetingDays)];
   
    return days!==meetingDays.length?
    days-meetingDays.length
    :0

};

console.log(countDays(10, [[5,7],[1,3],[9,10]])); //Output: 1