const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    if(!oldest.yearOfDeath) 
      oldest.yearOfDeath = (new Date()).getFullYear();
    if(!person.yearOfDeath) 
      person.yearOfDeath = (new Date()).getFullYear();
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    return (oldestAge > personAge) ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
