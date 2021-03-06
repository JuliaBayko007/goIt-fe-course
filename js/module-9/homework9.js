"use strict";

const time = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const laps = document.querySelector('.js-laps');
const li = document.querySelectorAll('li');
const lapArr = [];



class Timer {
    constructor({ onTick }) {
        this.startTime = null;
        this.deltaTime = null;
        this.timerId = null;
        this.lapTime = null;
        this.isActive = false;
        this.onTick = onTick;
    };

    start() {
        if(!this.isActive && startBtn.textContent === 'Start') {
            this.isActive = true;
            this.startTime = Date.now();
            this.timerId = setInterval(() => {
                const currentTime = Date.now();
                this.deltaTime = currentTime - this.startTime;
                const time = new Date(this.deltaTime);
                const min = time.getMinutes();
                const sec = time.getSeconds();
                const ms = Number.parseInt(time.getMilliseconds() / 10);
                const minutes = min >= 10 ? min : `0${min}`;
                const second = sec >= 10 ? sec : `0${sec}`;
                const millisec = ms >= 10 ? ms : `0${ms}`;
                this.onTick({ minutes, second, millisec });
            }, 100);
            startBtn.textContent = 'Pause';
            this.timerId;
        
        } else if (!this.isActive && startBtn.textContent === 'Continue') {
            this.startTime = new Date() - this.deltaTime;
            this.timerId = setInterval(() => {
                const currentTime = Date.now();
                this.deltaTime = currentTime - this.startTime;
                const time = new Date(this.deltaTime);
                const min = time.getMinutes();
                const sec = time.getSeconds();
                const ms = Number.parseInt(time.getMilliseconds() / 10);
                const minutes = min >= 10 ? min : `0${min}`;
                const second = sec >= 10 ? sec : `0${sec}`;
                const millisec = ms >= 10 ? ms : `0${ms}`;
                this.onTick({ minutes, second, millisec });
            }, 100);
            startBtn.textContent = 'Pause';
        
        
        } else {
            this.isActive = false;
            startBtn.textContent = 'Continue';
            clearInterval(this.timerId);
        };
    };
        
stop() {
    this.isActive = false;
    startBtn.textContent = 'Start';
    clearInterval(this.timerId);
    this.timerId = null;
    this.startTime = null;
    this.deltaTime = 0;
    this.onTick({ minutes: `0${0}`, second: `0${0}`, millisec: `0${0}` });
    document.querySelector('.js-laps').innerHTML = '';
};


 lap() {
  
    const lapLi = document.createElement('li');
    laps.prepend(lapLi);
    lapLi.textContent = time.textContent;
    lapArr.push(lapLi.textContent);
    
    } ;
};

const timer = new Timer ({
    startValue: 0,
    delay: 200,
    onTick: updateTime,
});

startBtn.addEventListener('click', timer.start.bind(timer));
resetBtn.addEventListener('click', timer.stop.bind(timer));
lapBtn.addEventListener('click', timer.lap.bind(timer));
function updateTime ({ minutes, second, millisec }) {
    time.textContent = `${minutes}:${second}:${millisec}`;
};





