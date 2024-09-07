// TypeScript for Resume Generator

const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const editResumeButton = document.getElementById('editResume') as HTMLButtonElement;
const resumePhoto = document.getElementById('resumePhoto') as HTMLImageElement;
const photoMessage = document.getElementById('photoMessage') as HTMLDivElement;
const photoInput = document.getElementById('photoInput') as HTMLInputElement;

const handlePhotoUpload = () => {
    const file = photoInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            resumePhoto.src = reader.result as string;
            photoMessage.textContent = 'Photo uploaded successfully!';
        };
        reader.readAsDataURL(file);
    }
};

photoInput.addEventListener('change', handlePhotoUpload);

const generateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExp = (document.getElementById('workExp') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    (document.getElementById('resumeName') as HTMLHeadingElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLParagraphElement).textContent = email;
    (document.getElementById('resumeEducation') as HTMLParagraphElement).textContent = education;
    (document.getElementById('resumeWorkExp') as HTMLParagraphElement).textContent = workExp;
    (document.getElementById('resumeSkills') as HTMLParagraphElement).textContent = skills;

    resumeOutput.style.display = 'block';
    resumeForm.style.display = 'none';
};

const editResume = () => {
    resumeOutput.style.display = 'none';
    resumeForm.style.display = 'block';
};

generateResumeButton.addEventListener('click', generateResume);
editResumeButton.addEventListener('click', editResume);
