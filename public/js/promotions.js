document.addEventListener("DOMContentLoaded", () => {
  // Get filter buttons and promotion cards
  const filterButtons = document.querySelectorAll(".promotions__filter-btn")
  const promoCards = document.querySelectorAll(".promo-card")

  // Add click event to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get filter value
      const filterValue = this.getAttribute("data-filter")

      // Filter cards
      promoCards.forEach((card) => {
        const cardStatus = card.getAttribute("data-status")

        if (filterValue === "all" || filterValue === cardStatus) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Format dates
  const dateElements = document.querySelectorAll(".promo-card__date-value")
  dateElements.forEach((element) => {
    const date = new Date(element.textContent)
    element.textContent = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })
})
