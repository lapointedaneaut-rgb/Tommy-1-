const content = {
  nav: {
    logo: "PaySoc",
    actions: [
      { label: "Se connecter", style: "ghost" },
      { label: "Créer un compte", style: "primary" },
    ],
  },
  hero: {
    pill: "Réseau social payant & équitable",
    title: "Une communauté où <span>tout le monde est rémunéré</span> pour sa contribution.",
    subtitle:
      "PaySoc redistribue chaque abonnement vers les créateurs, les modérateurs et les membres actifs. Un flux premium, des interactions sûres, et une économie transparente.",
    buttons: [
      { label: "Démarrer l'abonnement", style: "primary" },
      { label: "Voir la démo", style: "ghost" },
    ],
    stats: [
      { value: "€12", label: "par mois, 70% redistribués" },
      { value: "92%", label: "de créateurs satisfaits" },
      { value: "24h", label: "paiements hebdomadaires" },
    ],
  },
  preview: {
    handle: "@lena.kreat",
    detail: "Créatrice • 48k abonnés",
    badge: "Premium",
    quote:
      "« Grâce à PaySoc, chaque live et chaque commentaire me rapporte. On se sent vraiment soutenu·e par la communauté. »",
    payout: "€4 820",
    label: "Répartition du mois",
  },
  economy: [
    {
      title: "1. Abonnement collectif",
      description:
        "Chaque membre contribue une fois par mois. Une partie finance la plateforme, le reste est redistribué.",
    },
    {
      title: "2. Récompenses automatiques",
      description:
        "Les créateurs, modérateurs et membres actifs reçoivent des bonus selon leur impact.",
    },
    {
      title: "3. Transparence totale",
      description:
        "Tableau de bord en temps réel, transactions vérifiées, et règles de redistribution visibles.",
    },
  ],
  feed: {
    header: "Fil premium",
    subheader: "Des contenus exclusifs, sans publicité, rémunérés à la performance.",
    cta: "Explorer les créateurs",
    posts: [
      {
        author: "Studio Nova",
        meta: "Vidéo • 12 min",
        reward: "+€24",
        description: "Making-of de notre dernier court-métrage, avec accès aux rushs et FAQ en direct.",
      },
      {
        author: "Amina Pulse",
        meta: "Podcast • 45 min",
        reward: "+€19",
        description: "Épisode spécial sur la création d'une communauté payante éthique.",
      },
      {
        author: "@CollectifVert",
        meta: "Thread • 18 posts",
        reward: "+€12",
        description: "Plan d'action pour financer des projets locaux via les abonnements PaySoc.",
      },
    ],
  },
  pricing: {
    title: "Un modèle simple et juste",
    description: "Choisissez un plan, tout le monde est rémunéré automatiquement selon son impact.",
    plans: [
      {
        name: "Plan Communauté",
        price: "€12",
        note: "/ mois",
        features: ["70% redistribués aux créateurs", "20% pour la modération et les ambassadeurs", "10% pour l'infrastructure"],
        cta: "S'abonner",
      },
      {
        name: "Plan Collectif",
        price: "€20",
        note: "/ mois",
        features: ["Accès à toutes les communautés", "Bonus de co-création", "Tickets pour événements privés"],
        cta: "Rejoindre",
      },
    ],
  },
  cta: {
    title: "Prêt·e à rémunérer ta communauté ?",
    description: "Rejoins PaySoc et transforme chaque interaction en soutien concret.",
    action: "Créer un espace",
  },
  footer: "PaySoc © 2024 • Réseau social payant pour tous • Contact : hello@paysoc.app",
};

const app = document.querySelector("#app");

const buttonTemplate = ({ label, style }) => `<button class="${style}">${label}</button>`;

const render = () => {
  app.innerHTML = `
    <header class="hero">
      <nav class="top-nav">
        <div class="logo">${content.nav.logo}</div>
        <div class="nav-actions">
          ${content.nav.actions.map(buttonTemplate).join("")}
        </div>
      </nav>
      <div class="hero-content">
        <div>
          <p class="pill">${content.hero.pill}</p>
          <h1>${content.hero.title}</h1>
          <p class="subtitle">${content.hero.subtitle}</p>
          <div class="hero-buttons">
            ${content.hero.buttons.map(buttonTemplate).join("")}
          </div>
          <div class="stats">
            ${content.hero.stats
              .map(
                (stat) => `
                  <div>
                    <h3>${stat.value}</h3>
                    <p>${stat.label}</p>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="card preview">
          <div class="profile">
            <div class="avatar"></div>
            <div>
              <h4>${content.preview.handle}</h4>
              <p>${content.preview.detail}</p>
            </div>
            <span class="badge">${content.preview.badge}</span>
          </div>
          <p>${content.preview.quote}</p>
          <div class="progress">
            <div>
              <span>${content.preview.label}</span>
              <strong>${content.preview.payout}</strong>
            </div>
            <div class="bar">
              <div class="fill"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section">
        <h2>Comment l'économie PaySoc fonctionne</h2>
        <div class="grid">
          ${content.economy
            .map(
              (item) => `
                <article class="card">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section feed">
        <div class="section-header">
          <div>
            <h2>${content.feed.header}</h2>
            <p>${content.feed.subheader}</p>
          </div>
          <button class="ghost">${content.feed.cta}</button>
        </div>
        <div class="feed-grid">
          ${content.feed.posts
            .map(
              (post) => `
                <article class="card post">
                  <div class="post-header">
                    <div class="avatar small"></div>
                    <div>
                      <h4>${post.author}</h4>
                      <p>${post.meta}</p>
                    </div>
                    <span class="tag">${post.reward}</span>
                  </div>
                  <p>${post.description}</p>
                  <div class="post-actions">
                    <button>Réagir</button>
                    <button>Partager</button>
                    <button class="primary">Soutenir</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section pricing">
        <div>
          <h2>${content.pricing.title}</h2>
          <p>${content.pricing.description}</p>
        </div>
        ${content.pricing.plans
          .map(
            (plan) => `
              <div class="card pricing-card">
                <h3>${plan.name}</h3>
                <p class="price">${plan.price} <span>${plan.note}</span></p>
                <ul>
                  ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
                <button class="primary full">${plan.cta}</button>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="section cta">
        <div>
          <h2>${content.cta.title}</h2>
          <p>${content.cta.description}</p>
        </div>
        <button class="primary">${content.cta.action}</button>
      </section>
    </main>

    <footer>
      <p>${content.footer}</p>
    </footer>
  `;
};

render();
