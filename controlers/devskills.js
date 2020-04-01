const DevSkill = require('../models/DevSkill');

function index(req, res,) {
    res.render('DevSkills/index', {
      devskills: DevSkill.getAll()
    }); 
};


const newSkill = (req, res) => {
  res.render('devskills/new')
}


const show = (req, res) => {
  res.render('devskills/show', {
    skills: skills.getOne(req.params.id)
  });
}


const create = (req, res) => {
  console.log(req.body);
  req.body.done = false;
  skill.create(req.body);
  res.redirect('/devskills');
}



module.exports = {
  index,
  show,
  newSkill,
  create,
  
}
