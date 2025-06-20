const popup = document.getElementById('colorPopup');
const overlay = document.getElementById('overlay');
const colorPicker = document.getElementById('colorPicker');

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // document.body.classList.toggle("light-mode");
        console.log("clicked");
        popup.style.display = 'block';
        overlay.style.display = 'block';
    })
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
})();

function setColor(){
    let value = localStorage.getItem('themeColor');
    if(value==null){
        localStorage.setItem('themeColor', '#ff4c4c');
        colorPicker.value = '#ff4c4c';
    }
    else{
        document.documentElement.style.setProperty('--color-secondary', value);
        colorPicker.value = value;
    }
}

function closeP(){
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

function saveP(){
    closeP()
    const selectedColor = colorPicker.value;
    localStorage.setItem('themeColor', selectedColor);
    document.documentElement.style.setProperty('--color-secondary', selectedColor);
}