
var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var condition = this.nextElementSibling;
    if (condition.style.maxHeight){
      condition.style.maxHeight = null;
    } else {
      condition.style.maxHeight = condition.scrollHeight + "px";
    }
  });
}
