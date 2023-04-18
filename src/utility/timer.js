export const timeCheck = (givenTime, setMinutes, setSeconds) => {
  let takenTime = 0;
  let t = setInterval(() => {
    let min = parseInt(givenTime / 60);
    let sec = givenTime % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }
    setMinutes(min);
    setSeconds(sec);
    givenTime--;
    takenTime++;

    if (givenTime === -1) {
      clearInterval(t);
    }
  }, 1000);
  return takenTime;
};

export function timeTake(setTakenTime, setIntervalId) {
  const id = setInterval(() => {
    setTakenTime((prev) => prev + 1);
  }, 1000);
  setIntervalId(id);
}

export function stopTimer(intervalId) {
  clearInterval(intervalId);
  // console.log(takenTime);
  // console.log(intervalId);
}
