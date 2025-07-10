let accordions = document.getElementsByClassName("accordion")
var i;

for(i=0;i<accordions.length;i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let icon=this.getElementsByClassName("accordion-icon")[0];
        var dropdown = this.nextElementSibling;
        dropdown.classList.toggle("open");

        if(dropdown.classList.contains("open")) {
            icon.innerHTML="<h3>-</h3>";
        }
        else {
            icon.innerHTML="<h3>+</h3>";
        }
        
    })
}