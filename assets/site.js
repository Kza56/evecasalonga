(function(){
  var nav = document.getElementById("nav"), btn = document.querySelector(".menu-btn");
  function closeMenu(){ nav.classList.remove("is-open"); btn.setAttribute("aria-expanded","false"); }
  btn.addEventListener("click", function(){
    var open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeMenu(); });
  var an = document.getElementById("an"); if (an) an.textContent = new Date().getFullYear();
})();
