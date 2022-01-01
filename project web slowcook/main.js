
 const newElement = document.getElementById("new-list");
 const btn = document.getElementById("active");
 const ulChild = document.getElementById("dropdown");
 const dropdownMenu = document.querySelector(".click-dropdown");
 const hoverImg = document.querySelectorAll(".hover");
 //const textoverlay = document.querySelectorAll(".text");

 const marinadeMetode = document.querySelector("#marinade-methode");
 const flourMetode = document.querySelector("#flour-methode");
 const seasoningMetode = document.querySelector("#seasoning-methode");
 const fryingMetode = document.querySelector("#frying-methode");

 const closeMarinade = document.querySelector("#btn-marinade");
 const openMarinade = document.querySelector("#img-marinade");
 const openFlour = document.querySelector("#img-flour");
 const closeFlour = document.querySelector("#btn-flour");
 const openSeasoning = document.querySelector("#img-seasoning");
 const closeSeasoning = document.querySelector("#btn-seasoning");
 const openFrying = document.querySelector("#img-frying");
 const closeFrying = document.querySelector("#btn-frying");
 

 const listmarinade = document.querySelector("#listMarinade");
 const listflour = document.querySelector("#listFlour");
 const listseasoning = document.querySelector("#listSeasoning");
 const listfrying = document.querySelector("#listFrying");

 const overlayContainer = document.querySelectorAll(".overlay-container");

 

 dropdownMenu.addEventListener("click", function() {
	let transformElement = document.querySelector(".arrow");
	ulChild.classList.toggle("menu");
	transformElement.classList.toggle("transformElement");		
 });
 
 btn.addEventListener("click", function() { 
	newElement.classList.toggle("active")	
 });

 for(let l of hoverImg) {
	l.addEventListener("mouseover", function() {
		l.classList.add("mouseHover")
	})
 };

 for(let i of hoverImg) {
	i.addEventListener("mouseout", function() { 
		i.classList.remove("mouseHover")
 	})
 };


 for(let e of overlayContainer) {
			e.addEventListener("mouseover", function() {
				let i =  this.lastElementChild;
				if(i.style.opacity === 0) {
					i.style.opacity = 0.4;
				} else {
					i.style.opacity = 0.4;
				};	
			});

			e.addEventListener("mouseout", function() {
				let r = this.lastElementChild;
				if(r.style.opacity === 0.4) {
					r.style.opacity = 0;
				} else {
					r.style.opacity = 0;
				};
			});

 };


 function openList(content) {
	if(content.style.display === "none") {
		content.style.display = "flex";
	} else {
		content.style.display = "flex";
 	};
 };

 function closeList(content) {
	if(content.style.display === "flex") {
		content.style.display = "none";
	} else {
		content.style.display = "none";
 	};
 };


 openMarinade.addEventListener("click", function() {
	return openList(marinadeMetode);
 });

 closeMarinade.addEventListener("click", function() {
	return closeList(marinadeMetode);
 });
 
 
 openFlour.addEventListener("click", function() {
	return openList(flourMetode);
 });

 closeFlour.addEventListener("click", function() {
	return closeList(flourMetode);
 });

 openSeasoning.addEventListener("click", function() {
	return openList(seasoningMetode);
 });

 closeSeasoning.addEventListener("click", function() {
	return closeList(seasoningMetode);
 });

 openFrying.addEventListener("click", function() {
	return openList(fryingMetode);
 });
 
 closeFrying.addEventListener("click", function() {
	return closeList(fryingMetode);
 });



 listmarinade.addEventListener("click", function() {
	return openList(marinadeMetode);
 });
 
 listflour.addEventListener("click", function() {
	return openList(flourMetode);
 });

 listseasoning.addEventListener("click", function() {
	return openList(seasoningMetode);
 });

 listfrying.addEventListener("click", function() {
	return openList(fryingMetode);
 });


 