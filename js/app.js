const endDate = "2 September 2022 12:50 PM";
const inputs = document.querySelectorAll('input');

document.getElementById("end-date").innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff <= -now){
        alert("Unfortunately we have past the event day");
        clearInterval(interval);
    }
    else if (diff <= 0) {
        alert("Today is the event day");
        clearInterval(interval);
        return;
    }
    else{
        inputs[0].value = Math.floor(diff / 3600 / 24);
        inputs[1].value = Math.floor((diff / 3600) % 24);
        inputs[2].value = Math.floor((diff / 60) % 60);
        inputs[3].value = Math.floor(diff % 60);
    }
}

const interval = setInterval(() => clock(), 1000);