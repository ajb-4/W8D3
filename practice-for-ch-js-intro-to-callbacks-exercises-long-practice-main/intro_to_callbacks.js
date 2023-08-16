class Clock {
    constructor() {
        // this = clock instance
        // 1. Create a Date object.
        const currentDateTime = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.seconds = currentDateTime.getSeconds();
        this.minutes = currentDateTime.getMinutes();
        this.hours = currentDateTime.getHours();
        // 3. Call printTime.
        this.printTime() //object style? / method?
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000); //function style?
    }

    // clock._tick()

    // setInterval(callback, delay) {
    //     loop until delay {
    //         callback() // this -> window
    //     }
    // }

    // kin.give_strike() // this -> kin
    // window.give_strike() // this -> window

    printTime() {
        // Format the time in HH:MM:SS
        const formattedTime = `${this.hours}:${this.minutes}:${this.seconds}`;
        // Use console.log to print it.
        console.log(formattedTime);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.addSeconds();
        // 2. Call printTime.
        this.printTime();
    }
    
    addSeconds() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.addMinutes();
        }
    }

    addMinutes() {
        this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.addHours();
        }

    }

    addHours() {
        this.hours++;
        if (this.hours >= 24) {
            this.hours = 0;
        }
    }
}

const clock = new Clock();