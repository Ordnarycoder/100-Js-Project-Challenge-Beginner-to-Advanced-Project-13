const colors = ["blue", "red", "yellow", "green", "purple","pink","cyan","orange"]

const colorBtn = document.getElementById("color_btn");

colorBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 8); 
    document.body.style.backgroundColor = colors[random];
})

