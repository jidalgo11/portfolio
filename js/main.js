const header = document.querySelector("header");
const copyright = document.querySelector("#copyright");
const links = document.querySelectorAll('a[href^="#"]');
const aboutLink = document.querySelector("a[href='#aboutme']");

window.addEventListener("scroll", (e) => {
	if (window.scrollY > 5) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
	if (window.scrollY < 200) {
		aboutLink.classList.remove("active");
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

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav ul li a");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navLinks.forEach((link) => link.classList.remove("active"));
				document
					.querySelector(`a[href="#${entry.target.id}"]`)
					.classList.add("active");
			}
		});
	},
	{ threshold: 1 }
);

sections.forEach((section) => observer.observe(section));

const date = new Date();
const currentYear = date.getFullYear();

copyright.innerHTML = `&copy; ${currentYear} Daniel Hidalgo. All rights reserved.`;
