const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function lifeLengths(persons) {
    let result = {};
    for ( let person in persons) {
        result[person] = persons[person].died - persons[person].born;
    }
    return result;
}

console.log(lifeLengths(persons));