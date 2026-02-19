const router = require("express").Router();
const jobctrl = require("../controller/jobcontroller");
const { createjob, viewalljobs, viewsinglejob, deletejob } = require("../controller/jobcontroller");
const multer = require('multer');
const path = require('path');

//local storage with multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads', 'jobs'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, 'job_' + file.fieldname + '-' + Date.now() + ext);
    }
});

//allow only images
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB limit

//routes
router.post('/createjob', upload.single('jobimage'),jobctrl.createjob);
router.get('/viewalljobs', jobctrl.viewalljobs);
router.get('/viewsinglejob/:id', jobctrl.viewsinglejob);
router.delete('/deletejob/:id', jobctrl.deletejob);

module.exports = router;