const header = document.querySelector("header");
const copyright = document.querySelector("#copyright");
const links = document.querySelectorAll('a[href^="#"]');

window.addEventListener("scroll", (e) => {
	if (window.scrollY > 5) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
});

links.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		const targetEl = document.getElementById(targetId);

		if (targetEl) {
			const headerHeight = header.offsetHeight;

			const sectionPosition =
				targetEl.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = sectionPosition - headerHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	});
});

const date = new Date();
const currentYear = date.getFullYear();

copyright.innerHTML = `&copy; ${currentYear} Daniel Hidalgo. All rights reserved.`;
