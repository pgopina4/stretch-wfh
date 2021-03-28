function setReminder(){
    chrome.browserAction.setBadgeText({text:'ON'});

    chrome.alarms.create({

        delayInMinutes: 45
    })

    window.close();
}

function cancelReminder(){
    chrome.browserAction.setBadgeText({text:'OFF'});
    chrome.alarms.clearAll();
    window.close();
}

document.getElementById("stretch").addEventListener("click", setReminder);
document.getElementById("cancel").addEventListener("click", cancelReminder);
