//  Timer js
(function () {
  class CountdownTimer {
    constructor(element, endtime) {
      this.timer = element;
      this.daysSpan = this.timer.querySelector(".days");
      this.hoursSpan = this.timer.querySelector(".hours");
      this.minutesSpan = this.timer.querySelector(".minutes");
      this.secondsSpan = this.timer.querySelector(".seconds");
      this.endTime = endtime;
      this.timerInterval = null;
    }

    start() {
      this.updateClock();
      this.timerInterval = setInterval(() => {
        this.updateClock();
      }, 1000);
    }

    stop() {
      clearInterval(this.timerInterval);
    }

    updateClock() {
      const t = this.getTimeRemaining(this.endTime);

      this.daysSpan.innerHTML = t.days;
      this.hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      this.minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      this.secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        this.stop();
      }
    }

    getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());

      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));

      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }
  }

  const timerElements = document.querySelectorAll(".clockdiv-1");
  timerElements.forEach((timerElement) => {
    const deadline = new Date(
      Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
    );
    const timer = new CountdownTimer(timerElement, deadline);
    timer.start();
  });
})();
