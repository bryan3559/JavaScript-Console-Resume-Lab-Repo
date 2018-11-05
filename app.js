// This object was created to capture my name, my career objectives, and a brief description of myself:
let person = {
    Name: 'bryan clayton',
    Career: 'Product Development',
    Description: 'Highly motivated individual with over ten years experience in the financial services industry.'
};

console.log('Name' + ': ' + person.Name.toUpperCase());
console.log('Career' + ': ' + person.Career);
console.log('Description' + ': ' + person.Description + '\n\n');

// Array created to list out my interests:
let myInterests = ['Spending time with my family', 'Watching television', 'Reading', 'Conducting Research'];

let intHeader = 'My Interests'
console.log(intHeader + ': ');

for (let i = 0; i < myInterests.length; i++) {
    console.log('* ' + myInterests[i]);
}

let exHeader = 'My Previous Experience';
console.log('\n' + exHeader + ': ');

let pos1 = {
    Company: 'LSCU',
    Title: 'Product Development Manager',
    Role: 'Resposible for developing new products and services for credit unions.'
};

console.log(displayPosition(pos1.Company,pos1.Title,pos1.Role));

let pos2 = {
    Company: 'NCP Solutions',
    Title: 'Business Analyst',
    Role: 'Collaborated with clients to gather, review, and to define business requirements.'
};

console.log(displayPosition(pos2.Company,pos2.Title,pos2.Role));

let pos3 = {
    Company: 'Regions Bank',
    Title: 'Communications Analyst',
    Role: 'Hired to develop communications for call center associates. Provided project support for key bank-wide initiatives.'
};

console.log(displayPosition(pos3.Company,pos3.Title,pos3.Role));

function displayPosition(company,title,role) {
    if (pos1.Company === 'LSCU') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    } if (pos2.Company === 'NCP Solutions') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    } if (pos3.Company === 'Regions Bank') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    }
};

let skillsHeader = 'My Skills';

console.log('\n' + skillsHeader + ':');

let mySkills = ['Communications', 'Relationship Building', 'Decision Making', 'Planning & Organizing', 'Problem Solving', 'Time Management', 'Negotiation'];

for ( i = 0; i < mySkills.length; i++) {
    console.log(' * ' + mySkills[i]);
}




