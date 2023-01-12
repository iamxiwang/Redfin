

const TimeonGreenfin = (prop) => {
    const currentDate = new Date();
    const date2 = new Date(prop)
    const Difference_In_Time = currentDate - date2;
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.floor(Difference_In_Days)
}


export default TimeonGreenfin