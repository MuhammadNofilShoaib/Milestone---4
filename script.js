// TypeScript for Resume Generator
var resumeForm = document.getElementById('resumeForm');
var generateResumeButton = document.getElementById('generateResume');
var resumeOutput = document.getElementById('resumeOutput');
var editResumeButton = document.getElementById('editResume');
var resumePhoto = document.getElementById('resumePhoto');
var photoMessage = document.getElementById('photoMessage');
var photoInput = document.getElementById('photoInput');
var handlePhotoUpload = function () {
    var _a;
    var file = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            resumePhoto.src = reader_1.result;
            photoMessage.textContent = 'Photo uploaded successfully!';
        };
        reader_1.readAsDataURL(file);
    }
};
photoInput.addEventListener('change', handlePhotoUpload);
var generateResume = function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExp = document.getElementById('workExp').value;
    var skills = document.getElementById('skills').value;
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeWorkExp').textContent = workExp;
    document.getElementById('resumeSkills').textContent = skills;
    resumeOutput.style.display = 'block';
    resumeForm.style.display = 'none';
};
var editResume = function () {
    resumeOutput.style.display = 'none';
    resumeForm.style.display = 'block';
};
generateResumeButton.addEventListener('click', generateResume);
editResumeButton.addEventListener('click', editResume);
