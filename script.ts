/**
 * TypeScript functionality for Aly's Haven Café website
 */

// DOM Elements
const menuToggle = document.querySelector(".menu-toggle") as HTMLButtonElement;
const mainNav = document.querySelector(".main-nav") as HTMLElement;
const searchBox = document.querySelector(".search-box") as HTMLElement;
const monthlyToggle = document.getElementById(
  "monthly-toggle",
) as HTMLButtonElement;
const yearlyToggle = document.getElementById(
  "yearly-toggle",
) as HTMLButtonElement;

// Types
interface PricingTier {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

// Toggle mobile menu
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (mainNav) {
      mainNav.classList.toggle("show-mobile-nav");
    }
  });
}

// Search functionality
if (searchBox) {
  searchBox.addEventListener("click", () => {
    // Placeholder for search functionality
    console.log("Search clicked");
  });
}

// Pricing toggle functionality
if (monthlyToggle && yearlyToggle) {
  monthlyToggle.addEventListener("click", () => {
    monthlyToggle.classList.add("toggle-active");
    yearlyToggle.classList.remove("toggle-active");
    updatePricingDisplay("monthly");
  });

  yearlyToggle.addEventListener("click", () => {
    yearlyToggle.classList.add("toggle-active");
    monthlyToggle.classList.remove("toggle-active");
    updatePricingDisplay("yearly");
  });
}

/**
 * Updates the pricing display based on selected billing period
 * @param period - The billing period ('monthly' or 'yearly')
 */
function updatePricingDisplay(period: "monthly" | "yearly"): void {
  // Sample pricing data
  const pricingData: PricingTier[] = [
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
  const amountElements = document.querySelectorAll(
    ".amount",
  ) as NodeListOf<HTMLElement>;
  const periodElements = document.querySelectorAll(
    ".period",
  ) as NodeListOf<HTMLElement>;

  // Update pricing display
  if (amountElements.length === pricingData.length) {
    amountElements.forEach((element, index) => {
      const price =
        period === "monthly"
          ? pricingData[index].monthlyPrice
          : pricingData[index].yearlyPrice;
      element.textContent = price.toString();
    });

    periodElements.forEach((element) => {
      element.textContent = period === "monthly" ? "/ mo" : "/ yr";
    });
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Add CSS class for mobile menu when JavaScript is enabled
  if (mainNav) {
    mainNav.classList.add("js-enabled");
  }

  // Set initial pricing display
  updatePricingDisplay("monthly");
});

// Export empty object to make this a module
export {};
s