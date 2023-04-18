export function result(takenTime, typedText, paragraph){
    let rightWord = 0;
    let wrongWord = 0;
    let paraArr = paragraph.split(" ");
    // console.log(paraArr)
    let tyTxtArr = typedText.split(" ");
    // console.log(tyTxtArr)
    let totalWord = paraArr.length; // corrected spelling
    let typedWord = tyTxtArr.length; // corrected spelling
    for(let i=0; i<tyTxtArr.length; i++){ // corrected spelling
        if(tyTxtArr[i] === paraArr[i]){
            rightWord++;
        }else{
            wrongWord++;
        }
    }
    let grossSpeed1 = ((typedWord*60/takenTime)).toFixed(2)
    let netSpeed1 = ((rightWord*60/takenTime)).toFixed(2)
    let accuracy1 = (netSpeed1/grossSpeed1*100).toFixed(2)
    let min = parseInt(takenTime / 60);
    let sec = takenTime % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }
    return {
        totalWord,
        typedWord,
        rightWord,
        wrongWord,
        grossSpeed1,
        netSpeed1,
        accuracy1,
        min,
        sec,
    }
}
