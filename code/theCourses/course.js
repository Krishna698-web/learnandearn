

let close = document.getElementById('close');
close.addEventListener('click', () => {
    tutorial.style.display = 'none';
})



let tutLinks = ['https://youtu.be/HIj8wU_rGIU', 'https://www.youtube.com/embed/C_Th0S-H9qw', 'https://www.youtube.com/embed//wfNZ0hmdbSc', 'https://www.youtube.com/embed/ZByhs9mDtDg', 'https://www.youtube.com/embed/Vl0H-qTclOg', 'https://www.youtube.com/embed/PlHnamdwGmw', 'https://www.youtube.com/embed/MqwlW76sFCM', 'https://www.youtube.com/embed/NNamZZsggM4', 'https://www.youtube.com/embed/UyoXKGQrmtY', 'https://www.youtube.com/embed/uWPIsaYpY7U'];


let courseHeadings = document.getElementsByClassName('course-heading');
console.log(courseHeadings.innerHTML);

for (let i = 0; i < 10; i++) {
    document.getElementById(`course-${i}`).addEventListener('click', () => {
        document.getElementById('heading').innerHTML = courseHeadings.innerHTML;
        tutorial.style.display = 'block';
        document.getElementById('video').src = tutLinks[i];
    })
}