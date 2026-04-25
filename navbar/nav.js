async function loadNavbar() {
    try {
        const response = await fetch("../navbar/nav.html");
        if (!response.ok) throw new Error("Failed to load navbar");
        const navbarHTML = await response.text();
        document.getElementById("nav").innerHTML = navbarHTML;

        // Set active nav link based on current page
        setActiveNavLink();
    } catch (error) {
        console.error("Error loading navbar:", error);
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);