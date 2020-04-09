function tune(arr) {
    let standard_tuning = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let results = [];
    let result;
    let frequency;
    let norm_frequency;
    let diff;
    for(let i = 0; i< arr.length; i++){
        frequency = arr[i];
        norm_frequency = standard_tuning[i];
        if (frequency === 0){
            result = " - ";
        }
        else{
            diff = calculate_difference_in_percentage(norm_frequency, frequency);
            if( Math.abs(diff) >= 1 && Math.abs(diff) <= 3){
                if(diff > 0){
                    result = ">•";
                }
                else{
                    result = "•<";
                }
            }
            else if (Math.abs(diff)>= 3){
                if(diff > 0){
                    result = ">>•";
                }
                else{
                    result = "•<<";
                }
            }
            else{
                result = "OK";
            }
        }
        results.push(result);
    }
    return results;
}

function calculate_difference_in_percentage(norm_f,f) {
    return Math.round(((norm_f - f)/norm_f)*100);
}
