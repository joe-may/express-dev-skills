const skills = [
  {
      name: 'JavaScript', 
      description: 'The greatest programming language of all time, No questions.',
      level: 5
  },
  {
      name: 'HTML', 
      description: 'HTML handles structure',
      level: 3
  },
  {
      name: 'CSS', 
      description: 'CSS handles style',
      level: 4
  }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  skills.splice(id, 1, skill);
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}

function getOne(id) {
  return skills[id];
}

function getAll() {
  return skills;
}