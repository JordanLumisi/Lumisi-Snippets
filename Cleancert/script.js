let mainframe = document.querySelector("#dynamic-room");
let learnMore = document.querySelector("#dynamic-learnmore");
let knowTheRisks = document.querySelector("#dynamic-link");
let dynamicImg = document.querySelector("#dynamic-img");
let dynamicImgLink = document.querySelector("#dynamic-imgLink");

const cleancert = {
	mainframeSrc: "/wp-content/uploads/2021/11/dentist-surgery-cleancert.png",
	learnMoreURL: "/cleancert-biofilm-removal",
	knowTheRisksURL: "/cleancert-biofilm-removal#ra-tool",
	productImgSrc: "/wp-content/uploads/2021/11/CleanCert-Product-Range-R-L.png",
	btn: document.querySelector(".logo-wrap.cleancert"),
	color: "#4E93A2",
};
const orawize = {
	mainframeSrc: "/wp-content/uploads/2021/11/dentist-surgery-orawize-1.png",
	learnMoreURL: "/orawize-oxidising-mouthwash",
	knowTheRisksURL: "/orawize-oxidising-mouthwash#ra-tool",
	productImgSrc: "/wp-content/uploads/2021/11/orawize-product-range-R-L.png",
	btn: document.querySelector(".logo-wrap.orawize"),
	color: "#E66124",
};
const optizil = {
	mainframeSrc: "/wp-content/uploads/2021/11/dentist-surgery-optizil.png",
	learnMoreURL: "/optizil-non-toxic-clinical-disinfectant",
	knowTheRisksURL: "/optizil-non-toxic-clinical-disinfectant#ra-tool",
	productImgSrc: "/wp-content/uploads/2021/11/optizil-Product-Range-R-L.png",
	btn: document.querySelector(".logo-wrap.optizil"),
	color: "#524281",
};
const eauflow = {
	mainframeSrc: "/wp-content/uploads/2021/11/dentist-surgery-eauflow-1.png",
	learnMoreURL: "/eauflow-clinical-water-purification",
	knowTheRisksURL: "/eauflow-clinical-water-purification#ra-tool",
	productImgSrc: "/wp-content/uploads/2021/11/euaflow-set-no-floor-1000px.png",
	btn: document.querySelector(".logo-wrap.eauflow"),
	color: "#1283CB",
};

const steriderm = {
	mainframeSrc: "/wp-content/uploads/2023/07/steridermal-main.jpg",
	learnMoreURL: "/skin-and-hand-disinfectant",
	knowTheRisksURL: "/skin-and-hand-disinfectant#ra-tool",
	productImgSrc:
		"/wp-content/uploads/2021/11/SteriDermal-Product-Range-Web.png",
	btn: document.querySelector(".logo-wrap.steriderm"),
	color: "#cb9a32",
};

function changeProduct(evt, productName) {
	switch (productName) {
		case "cleancert":
			resetFrame();
			zoomIn("cleancert");
			cleancert.btn.classList.add("active");
			mainframe.src = cleancert.mainframeSrc;
			learnMore.href = cleancert.learnMoreURL;
			learnMore.innerText = "Learn more about CleanCert";
			learnMore.classList.add("cleancert");
			knowTheRisks.href = cleancert.knowTheRisksURL;
			knowTheRisks.classList.add("cleancert");
			dynamicImg.src = cleancert.productImgSrc;
			dynamicImgLink.href = cleancert.knowTheRisksURL;
			break;
		case "orawize":
			resetFrame();
			dynamicImg.src = orawize.productImgSrc;
			dynamicImg.classList.add("resizeImg-orawize");
			zoomIn("orawize");
			orawize.btn.classList.add("active");
			mainframe.src = orawize.mainframeSrc;
			learnMore.href = orawize.learnMoreURL;
			learnMore.innerText = "Learn more about OraWize";
			learnMore.classList.add("orawize");
			knowTheRisks.href = orawize.knowTheRisksURL;
			knowTheRisks.classList.add("orawize");
			dynamicImgLink.href = orawize.knowTheRisksURL;
			break;
		case "optizil":
			resetFrame();
			dynamicImg.src = optizil.productImgSrc;
			dynamicImg.classList.add("resizeImg-optizil");
			zoomIn("optizil");
			optizil.btn.classList.add("active");
			mainframe.src = optizil.mainframeSrc;
			learnMore.href = optizil.learnMoreURL;
			learnMore.innerText = "Learn more about OptiZil";
			learnMore.classList.add("optizil");
			knowTheRisks.href = optizil.knowTheRisksURL;
			knowTheRisks.classList.add("optizil");
			dynamicImgLink.href = optizil.knowTheRisksURL;
			break;
		case "eauflow":
			resetFrame();
			dynamicImg.src = eauflow.productImgSrc;
			dynamicImg.classList.add("resizeImg-eauflow");
			zoomIn("eauflow");
			eauflow.btn.classList.add("active");
			mainframe.src = eauflow.mainframeSrc;
			learnMore.href = eauflow.learnMoreURL;
			learnMore.innerText = "Learn more about EauFlow";
			learnMore.classList.add("eauflow");
			knowTheRisks.href = eauflow.knowTheRisksURL;
			knowTheRisks.classList.add("eauflow");
			dynamicImgLink.href = eauflow.knowTheRisksURL;
			break;
		case "steriderm":
			resetFrame();
			dynamicImg.src = steriderm.productImgSrc;
			dynamicImg.classList.add("resizeImg-steriderm");
			zoomIn("steriderm");
			steriderm.btn.classList.add("active");
			mainframe.src = steriderm.mainframeSrc;
			learnMore.href = steriderm.learnMoreURL;
			learnMore.innerText = "Learn more about SteriDermal";
			learnMore.classList.add("steriderm");
			knowTheRisks.href = steriderm.knowTheRisksURL;
			knowTheRisks.classList.add("steriderm");
			dynamicImgLink.href = steriderm.knowTheRisksURL;
	}
}

function resetFrame() {
	let prodBtns = document.querySelectorAll(".logo-wrap");
	let i;
	for (i = 0; i < prodBtns.length; ++i) {
		prodBtns[i].classList.remove("active");
	}
	knowTheRisks.className = "";
	learnMore.className = "";
	dynamicImg.className = "";
}
function zoomIn(product) {
	mainframe.className = "";
	mainframe.classList.add("zoom-" + product);
}

const logoRow = document.querySelector("#interactive-logos-row");
let animStarted = false;

const cleancertBtn = document.querySelector(".logo-wrap.cleancert");

function runAnim() {
	if (animStarted == false) {
		document
			.querySelector("#dental-practice .flex-logos")
			.classList.add("animate");
		animStarted = true;
		setTimeout(function () {
			cleancertBtn.click();
		}, 2000);
	}
}
runAnim();
