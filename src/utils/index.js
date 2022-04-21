export const getColor = (seconds) => {
    if (60 >= seconds && seconds > 52) return 'purple';
    else if (51 >= seconds && seconds > 42) return 'blue';
    else if (41 >= seconds && seconds > 32) return 'green';
    else if (31 >= seconds && seconds > 22) return 'yellow';
    else if (21 >= seconds && seconds > 12) return 'orange';
    else if (11 >= seconds && seconds > 0) return 'red';
    else return 'grey';
}