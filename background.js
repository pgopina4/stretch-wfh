chrome.alarms.onAlarm.addListener(function() {
    chrome.browserAction.setBadgeText({text: ''});
    chrome.notifications.create( {
        type:'basic',
        requireInteraction:true,
        iconUrl:'stretching.jpeg',
        title:'Stretch Reminder',
        message:'Time to take a break'
    })

});

