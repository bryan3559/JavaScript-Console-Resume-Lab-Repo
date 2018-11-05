// This object was created to capture my name, my career objective, and a brief description of myself:
let person = {
    Name: 'bryan clayton',
    Career: 'Product Development',
    Description: 'Highly motivated individual with over ten years experience in the financial services industry.'
};

// Displays my name to the console in all caps:
console.log('Name' + ': ' + person.Name.toUpperCase());

// Displays my profession with a colon behind the title "Career":

console.log('Career' + ': ' + person.Career);

// Displays my profile description with a colon behind the title "Description":
console.log('Description' + ': ' + person.Description + '\n\n');

// Array created to list out my interests:
let myInterests = ['Spending time with my family', 'Watching television', 'Reading', 'Conducting Research'];

//Displays the header "My Interests" with a proceeding colon:
let intHeader = 'My Interests'
console.log(intHeader + ': ');

//For loop creating to display "My Interest" list to the console:
for (let i = 0; i < myInterests.length; i++) {
    console.log('* ' + myInterests[i]);
}

//Displays the header "My Previous Experience" with a proceeding colon:
let exHeader = 'My Previous Experience';
console.log('\n' + exHeader + ': ');

//Object created to display my most current position:
let pos1 = {
    Company: 'LSCU',
    Title: 'Product Development Manager',
    Role: 'Resposible for developing new products and services for credit unions.'
};

//Displays the company, title, and role for first entry:
console.log(displayPosition(pos1.Company,pos1.Title,pos1.Role));

//Object created to display second position:
let pos2 = {
    Company: 'NCP Solutions',
    Title: 'Business Analyst',
    Role: 'Collaborated with clients to gather, review, and to define business requirements.'
};

//Displays the company, title, and role for second entry:
console.log(displayPosition(pos2.Company,pos2.Title,pos2.Role));

//Object created to display third position:
let pos3 = {
    Company: 'Regions Bank',
    Title: 'Communications Analyst',
    Role: 'Hired to develop communications for call center associates. Provided project support for key bank-wide initiatives.'
};

//Displays the company, title, and role for third entry:
console.log(displayPosition(pos3.Company,pos3.Title,pos3.Role));

//Function created to format job experience:
function displayPosition(company,title,role) {
    if (pos1.Company === 'LSCU') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    } if (pos2.Company === 'NCP Solutions') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    } if (pos3.Company === 'Regions Bank') {
        return '* ' + title + ' at ' + company + ' - ' + role;
    }
};

//Displays the header "My Skills" with a proceeding colon:
let skillsHeader = 'My Skills';

console.log('\n' + skillsHeader + ':');

//This array of objects was created to display my skills. It also documents the skills that are considered to be cool:
let mySkills = [{Skill: 'Communications', Cool: 'True'}, {Skill: 'Relationship Building', Cool: 'False'}, {Skill: 'Decision Making', Cool: 'True'}, {Skill: 'Planning & Organizing', Cool: 'True'}, {Skill: 'Problem Solving', Cool: 'True'}, {Skill: 'Time Management', Cool: 'True'}, {Skill: 'Negotiation', Cool: 'False'}
]; 

//For loop created to display "My Skills" list to the console. The loop is calling the below function:
for (i = 0; i < mySkills.length; i++) {
    console.log(displaySkill(mySkills[i].Skill,mySkills[i].Cool))
};

//Function created to to display the word "BAM" in front of the skills that I consider to be cool:
function displaySkill(Skill,Cool) {
    if(Cool === 'True') {
        return '* BAM: ' + Skill;
    } else {
        return '* ' + Skill;
    }
};




