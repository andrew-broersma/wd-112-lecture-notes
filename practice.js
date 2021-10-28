let numberGrade = 80;

switch (numberGrade) {
    case ((numberGrade >= 100) && (numberGrade <= 89)):
        console.log("You passed with an 'A'");
        break;
    case ((numberGrade >= 88) && (numberGrade <= 79)):
        console.log("You passed with a 'B'");
        break;
    case ((numberGrade >= 78) && (numberGrade <= 66)):
        console.log("You passed with a 'C'");
        break;
    case ((numberGrade >= 65) && (numberGrade <= 59)):
        console.log("You have barely passed with a 'D'");
        break;
    default:
        console.log("you failed");
}

