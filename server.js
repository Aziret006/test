const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.set("views", path.join(__dirname, "templates"))
app.set("view engine", "pug")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("promotions", {
    title: "PrimeBet - Promotions",
    promotions: [
      {
        id: 1,
        title: "Welcome Bonus",
        description: "Get 100% bonus on your first deposit up to $500",
        endDate: "2025-06-30",
        image: "/images/promo-welcome.jpg",
      },
      {
        id: 2,
        title: "Weekend Cashback",
        description: "Receive 15% cashback on all weekend losses",
        endDate: "2025-05-15",
        image: "/images/promo-cashback.jpg",
      },
      {
        id: 3,
        title: "VIP Program",
        description: "Join our VIP program and get exclusive bonuses and promotions",
        endDate: "2024-03-01", 
        image: "/images/promo-vip.jpg",
      },
      {
        id: 4,
        title: "Refer a Friend",
        description: "Get $50 for each friend you refer to PrimeBet",
        endDate: "2025-12-31",
        image: "/images/promo-refer.jpg",
      },
      {
        id: 5,
        title: "Sports Betting Bonus",
        description: "Get a free bet of $25 when you place your first sports bet",
        endDate: "2024-01-15", 
        image: "/images/promo-sports.jpg",
      },
      {
        id: 6,
        title: "Mobile App Bonus",
        description: "Download our mobile app and get a $10 free bet",
        endDate: "2025-08-20",
        image: "/images/promo-mobile.jpg",
      },
    ],
  })
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
