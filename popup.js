function setReminder(){
    chrome.browserAction.setBadgeText({text:'ON'});
    console.log(document.getElementById('minutes').value);

    chrome.alarms.create({

        delayInMinutes: parseInt(document.getElementById('minutes').value,10)

    });

    window.close();
}

function cancelReminder(){
    chrome.browserAction.setBadgeText({text:'OFF'});
    chrome.alarms.clearAll();
    window.close();
}

document.getElementById("stretch").addEventListener("click", setReminder);
document.getElementById("cancel").addEventListener("click", cancelReminder);
