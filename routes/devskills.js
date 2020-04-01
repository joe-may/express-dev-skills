var express = require('express');
var router = express.Router();

const  devSkillsCtrl = require('../controlers/devskills')
router.get('/', devSkillsCtrl.index);
router.get('/new', devSkillsCtrl.newSkill);
router.get('/:id', devSkillsCtrl.show);

router.post('/', devSkillsCtrl.create);



module.exports = router;
