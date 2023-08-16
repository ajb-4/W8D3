class Clock {
    constructor() {
        // 1. Create a Date object.
        const currentDateTime = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.seconds = currentDateTime.getSeconds();
        this.minutes = currentDateTime.getMinutes();
        this.hours = currentDateTime.getHours();
        // 3. Call printTime.
        this.printTime() //object style? / method?
        // 4. Schedule the tick at 1 second intervals.
        setInterval(_tick, 1000); //function style?
    }

    printTime() {
        // Format the time in HH:MM:SS
        const formattedTime = `${this.seconds}:${this.minutes}:${this.hours}`;
        // Use console.log to print it.
        console.log(formattedTime);
    }

    _tick() {
        // 1. Increment the time by one second.
    
        // 2. Call printTime.
            
    }

    addMinutes () {

    }

}
