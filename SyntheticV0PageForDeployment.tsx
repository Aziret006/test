"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import "./styles/promotions.scss" 

interface Promotion {
  id: number
  title: string
  description: string
  endDate: string
  image: string
  category: string
}

export default function SyntheticV0PageForDeployment() {
  const promotionsData: Promotion[] = [
    {
      id: 1,
      title: "Приветственный бонус",
      description: "Получите 100% бонус на первый депозит до 50 000 ₽",
      endDate: "2025-06-30",
      image: "/images/key.jpg",
      category: "casino",
    },
    {
      id: 2,
      title: "Кэшбэк выходного дня",
      description: "Верните 15% от проигрышей в выходные дни",
      endDate: "2025-05-15",
      image: "/images/key.jpg",
      category: "sports",
    },
    {
      id: 3,
      title: "VIP Программа",
      description: "Присоединяйтесь к нашей VIP программе и получайте эксклюзивные бонусы",
      endDate: "2024-03-01", 
      image: "/images/key.jpg",
      category: "casino",
    },
    {
      id: 4,
      title: "Приведи друга",
      description: "Получите 5 000 ₽ за каждого приглашенного друга",
      endDate: "2025-12-31",
      image: "/images/key.jpg",
      category: "all",
    },
    {
      id: 5,
      title: "Бонус на ставки",
      description: "Получите бесплатную ставку 2 500 ₽ при первой ставке на спорт",
      endDate: "2024-01-15", 
      image: "/images/key.jpg",
      category: "sports",
    },
    {
      id: 6,
      title: "Бонус мобильного приложения",
      description: "Скачайте наше мобильное приложение и получите бесплатную ставку 1 000 ₽",
      endDate: "2025-08-20",
      image: "/images/key.jpg",
      category: "all",
    },
  ]

  const [promotions, setPromotions] = useState<Promotion[]>(promotionsData)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [isLoaded, setIsLoaded] = useState(false)

  const filterPromotions = (statusFilter: string, catFilter: string = categoryFilter) => {
    setActiveFilter(statusFilter)

    let filtered = promotionsData

    if (statusFilter === "active") {
      filtered = filtered.filter((promo) => new Date(promo.endDate) > new Date())
    } else if (statusFilter === "expired") {
      filtered = filtered.filter((promo) => new Date(promo.endDate) <= new Date())
    }

    if (catFilter !== "all") {
      filtered = filtered.filter((promo) => promo.category === catFilter)
    }

    setPromotions(filtered)
  }

  const filterByCategory = (category: string) => {
    setCategoryFilter(category)
    filterPromotions(activeFilter, category)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("ru-RU", options)
  }

  const isExpired = (endDate: string) => {
    return new Date(endDate) <= new Date()
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`page-wrapper ${isLoaded ? "loaded" : ""}`}>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <Link href="/">PrimeBet</Link>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link href="/">Главная</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/" className="active">
                  Акции
                </Link>
              </li>
              <li className="header__menu-item">
                <Link href="/">Спорт</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/">Казино</Link>
              </li>
              <li className="header__menu-item">
                <Link href="/">Лайв-ставки</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="promotions">
            <div className="promotions__header">
              <h1 className="promotions__title">Акции и бонусы</h1>
              <p className="promotions__subtitle">Откройте для себя наши лучшие предложения и эксклюзивные бонусы</p>

              <div className="promotions__filters">
                <div className="promotions__filter">
                  <button
                    className={`promotions__filter-btn ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => filterPromotions("all")}
                  >
                    Все акции
                  </button>
                  <button
                    className={`promotions__filter-btn ${activeFilter === "active" ? "active" : ""}`}
                    onClick={() => filterPromotions("active")}
                  >
                    Активные
                  </button>
                  <button
                    className={`promotions__filter-btn ${activeFilter === "expired" ? "active" : ""}`}
                    onClick={() => filterPromotions("expired")}
                  >
                    Завершенные
                  </button>
                </div>

                <div className="promotions__category-filter">
                  <button
                    className={`promotions__category-btn ${categoryFilter === "all" ? "active" : ""}`}
                    onClick={() => filterByCategory("all")}
                  >
                    Все
                  </button>
                  <button
                    className={`promotions__category-btn ${categoryFilter === "sports" ? "active" : ""}`}
                    onClick={() => filterByCategory("sports")}
                  >
                    Спорт
                  </button>
                  <button
                    className={`promotions__category-btn ${categoryFilter === "casino" ? "active" : ""}`}
                    onClick={() => filterByCategory("casino")}
                  >
                    Казино
                  </button>
                </div>
              </div>
            </div>

            <div className="promotions__grid">
              {promotions.length > 0 ? (
                promotions.map((promo, index) => {
                  const expired = isExpired(promo.endDate)
                  const cardClass = expired ? "promo-card promo-card--expired" : "promo-card"

                  return (
                    <div
                      key={promo.id}
                      className={cardClass}
                      data-status={expired ? "expired" : "active"}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="promo-card__image">
                        <img src={promo.image || "/placeholder.svg"} alt={promo.title} />
                        {expired && <div className="promo-card__expired-badge">Завершено</div>}
                        <div className="promo-card__category-badge">
                          {promo.category === "sports" ? "Спорт" : promo.category === "casino" ? "Казино" : "Все"}
                        </div>
                      </div>
                      <div className="promo-card__content">
                        <h3 className="promo-card__title">{promo.title}</h3>
                        <p className="promo-card__description">{promo.description}</p>
                        <div className="promo-card__footer">
                          <div className="promo-card__date">
                            <span className="promo-card__date-label">Действует до:</span>
                            <span className="promo-card__date-value">{formatDate(promo.endDate)}</span>
                          </div>
                          <a href="#" className="promo-card__button">
                            Подробнее
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="promotions__empty">
                  <div className="promotions__empty-icon">🔍</div>
                  <h3>Акции не найдены</h3>
                  <p>По выбранным фильтрам не найдено ни одной акции</p>
                  <button
                    className="promotions__reset-btn"
                    onClick={() => {
                      setActiveFilter("all")
                      setCategoryFilter("all")
                      setPromotions(promotionsData)
                    }}
                  >
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">PrimeBet</div>
            <div className="footer__copyright">&copy; 2025 PrimeBet. Все права защищены.</div>
            <div className="footer__links">
              <Link href="/">Условия и положения</Link>
              <Link href="/">Политика конфиденциальности</Link>
              <Link href="/">Ответственная игра</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
