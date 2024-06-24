// Modal javascript adapted from w3schools.com/howto/howto_css_modals

// Arrays list the IDs of modal buttons and modal containers
const modalBtnNames = [
	"btnOne",
	"btnTwo",
	"btnThree",
	"btnFour",
	"btnFive",
	"btnSix",
	"btnSeven",
	"btnEight",
	"btnNine",
	"btnTen",
];

const modalNames = [
	"modalOne",
	"modalTwo",
	"modalThree",
	"modalFour",
	"modalFive",
	"modalSix",
	"modalSeven",
	"modalEight",
	"modalNine",
	"modalTen",
];

modalBtnNames.forEach((btnID, index) => {
	const button = document.getElementById(btnID);
	const modal = document.getElementById(modalNames[index]);
	const closeModal = document.getElementsByClassName("close")[index];

	button.onclick = function () {
		modal.style.display = "block";
	};

	closeModal.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
});

/* 

Skeleton code:

click on button
    get index of btn
        find matching modal index

        set matching modal to display block

        click on span
            set matching modal to display none
        
        click on window
            set matching modal to display none



*/
