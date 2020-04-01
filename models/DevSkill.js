const devSkills = [
    {skills: "html", done: true },
    {skills: "learning express", done: false },
    {skills: "javascript", done: false },
]

function getAll() {
    return devSkills;
  }

  const getOne = (id) => {
    return devSkills[id];
  }

  const create = (devSkills) => {
    skills.push(devSkills);
  }

  module.exports = {
    getAll,
    create,
    getOne
  };