window.onload = () => {
    $("#start").on("click", stopwatch.startStop);
    $("#reset").on("click", stopwatch.reset);
};

let intervalId;
let clockRunning = false;
let duration1;
let duration2;
let duration3;

const stopwatch = {
    time: 0,
    reset: () => {
        stopwatch.time = 0;
        $("#clock").text("00:00");
        checkTime();
        $("#duration1").val("");
        $("#duration2").val("");
        $("#duration3").val("");
    },
    startStop: () => {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
            $("#start").text("Stop");
        } else {
            clearInterval(intervalId);
            clockRunning = false;
            $("#start").text("Start");
        }
    },
    count: () => {
        stopwatch.time++;
        const converted = stopwatch.timeConverter(stopwatch.time);
        $("#clock").text(converted);
        checkTime();

    },
    timeConverter: (t) => {
        let minutes = Math.floor(t / 60);
        let seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};

$(document).on('change', 'select', function () {
    var selectedShow = $(this).children("option:selected").val();

    if (selectedShow === "newShow") {
        $("#newShow").toggle();
    } else if (selectedShow !== "newShow") {
        $("#newShow").css("display", "none");
    }
    console.log(selectedShow);
});

$(document).on('change', 'input', () => {
    // $("#addSection").on("click", addSection);
    duration1 = $("#duration1").val();
    duration2 = $("#duration2").val();
    duration3 = $("#duration3").val();
});

checkTime = () => {
    update = (dur, id) => {
        if (stopwatch.time >= dur) {
            $(id).addClass('timeOut');
        } else {
            $(id).removeClass('timeOut');
        };
    }
    update(duration1, "#showSection1");
    update(duration2, "#showSection2");
    update(duration3, "#showSection3");
};

addSection = () => {
    console.log("This Works");
    // $(".showSection")
}