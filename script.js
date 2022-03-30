$(document).ready(function () {
    console.log("ready!");
    // const image = document.getElementById('image');
    // const status = document.getElementById('status');
    // const bgColor = document.querySelector('.main');

    // function setStatus(isConnected) {
    //     if (isConnected) {
    //         image.src = './wifi.png';
    //         bgColor.classList.remove("offline");
    //         status.textContent = "Online";
    //     } else {
    //         image.src = './no-wifi.png';
    //         bgColor.classList.add("offline");
    //         status.textContent = "Offline";
    //     }
    // }

    // async function connectionStatus() {
    //     try {
    //         const result = await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0");
    //         return result.status >= 200 && result.status < 300
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // setInterval(async () => {
    //     console.log("looped")
    //     const result = await connectionStatus();

    //     setStatus(result);
    // }, 3000);

    // window.addEventListener("load", async (event) => {
    //     const result = await connectionStatus();
    //     setStatus(result);

    // })

    const setStatus = (isConnected) => {
        if (isConnected) {
            $("#image").attr("src", "./wifi.png");
            $(".main").removeClass("offline");
            $("#status").text("Online");
        } else {
            $("#image").attr("src", "./no-wifi.png");
            $(".main").addClass("offline");
            $("#status").text("offline");
        }
    }

    const connectionStatus = async () => {
        let success = true
        try {
            await $.ajax("https://api.icndb.com/jokes/random");
        } catch (e) {
            success = false
        }

        return success;
    }

    setInterval(async () => {
        const result = await connectionStatus();
        console.log(result);
        setStatus(result)
    }, 4000);

    $(window).on("load", async function () {
        const result = await connectionStatus();
        setStatus(result);
    })

});