/**
 * JavaScript functionality for Aly's Haven Café website
 */

// DOM Elements
var menuToggle = document.querySelector(".menu-toggle");
var mainNav = document.querySelector(".main-nav");
var searchBox = document.querySelector(".search-box");
var monthlyToggle = document.getElementById("monthly-toggle");
var yearlyToggle = document.getElementById("yearly-toggle");


window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav"); 
    if (window.scrollY > 580 && window.scrollY<1220)
    {
        navbar.classList.add("nav-scrolled");
    }
    else {
        navbar.classList.remove("nav-scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navlinks");
    const menuLinks = document.querySelectorAll(".navlinks ul li a"); 

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("visited")) {
        localStorage.setItem("visited", "true");
        window.location.href = "loader.html";
    } else if (window.location.pathname.includes("loader.html")) {
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    } else {
        localStorage.removeItem("visited");
    }
});


// Toggle mobile menu
if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    if (mainNav) {
      mainNav.classList.toggle("show-mobile-nav");
    }
  });
}

// Search functionality
if (searchBox) {
  searchBox.addEventListener("click", function () {
    // Placeholder for search functionality
    console.log("Search clicked");
  });
}

// Pricing toggle functionality
if (monthlyToggle && yearlyToggle) {
  monthlyToggle.addEventListener("click", function () {
    monthlyToggle.classList.add("toggle-active");
    yearlyToggle.classList.remove("toggle-active");
    updatePricingDisplay("monthly");
  });
  yearlyToggle.addEventListener("click", function () {
    yearlyToggle.classList.add("toggle-active");
    monthlyToggle.classList.remove("toggle-active");
    updatePricingDisplay("yearly");
  });
}

/**
 * Updates the pricing display based on selected billing period
 * @param period - The billing period ('monthly' or 'yearly')
 */
function updatePricingDisplay(period) {
  // Sample pricing data
  var pricingData = [
    {
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Basic WiFi Access (10 Mbps)",
        "Loyalty Points System",
        "Monthly Special Offers",
        "Birthday Perk",
        "Early Access to New Menu Items",
      ],
    },
    {
      name: "Deluxe",
      monthlyPrice: 1499,
      yearlyPrice: 14990, // 10% discount for yearly
      features: [
        "Ultra-Fast WiFi (200 Mbps+)",
        "Unlimited Coffee & Tea Refills",
        "Exclusive Lounge Access",
        "20% Discounts",
        "Priority Service",
      ],
    },
    {
      name: "Premium",
      monthlyPrice: 420,
      yearlyPrice: 4200, // 10% discount for yearly
      features: [
        "Fast WiFi (100 Mbps)",
        "2 Refills Per Visit",
        "Exclusive Member Seating",
        "10% Discounts",
        "Birthday Freebie",
      ],
    },
  ];
  // Get all amount elements
  var amountElements = document.querySelectorAll(".amount");
  var periodElements = document.querySelectorAll(".period");
  // Update pricing display
  if (amountElements.length === pricingData.length) {
    amountElements.forEach(function (element, index) {
      var price =
        period === "monthly"
          ? pricingData[index].monthlyPrice
          : pricingData[index].yearlyPrice;
      element.textContent = price.toString();
    });
    periodElements.forEach(function (element) {
      element.textContent = period === "monthly" ? "/ mo" : "/ yr";
    });
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Add CSS class for mobile menu when JavaScript is enabled
  if (mainNav) {
    mainNav.classList.add("js-enabled");
  }
  // Set initial pricing display
  updatePricingDisplay("monthly");
});
