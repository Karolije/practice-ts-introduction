enum Gender {male = "mężczyzna", female="kobieta"}

let user: [string, string, number, Gender] = ["Anna", "Nowak", 25, Gender.female]


function printUserInfo(user): string {
    const [firstName, lastName, age, gender] = user;

   return `${firstName} ${lastName} - ${gender}, lat ${age}`
}


console.log(printUserInfo(user));