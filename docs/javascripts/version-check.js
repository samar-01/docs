(async function () {
  const DOCUMENTED = {
    microblue: "2.0.0",
    snappyxoshield: "0.2.0",
  };

  const REPOS = {
    microblue: "microblue-arduino",
    snappyxoshield: "SnappyXOShield",
  };

  const path = window.location.pathname;
  let library = null;
  if (path.includes("/microblue/")) library = "microblue";
  else if (path.includes("/snappyxoshield/")) library = "snappyxoshield";
  if (!library) return;

  async function fetchLatestRelease(repo) {
    const cacheKey = `release_check_${repo}`;
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    if (cached && Date.now() - cached.ts < 60 * 60 * 1000) {
      return cached.version;
    }
    try {
      const res = await fetch(
        `https://api.github.com/repos/snappyxo/${repo}/releases/latest`,
        { headers: { Accept: "application/vnd.github+json" } },
      );
      if (!res.ok) return null;
      const data = await res.json();
      // Strip leading 'v' from tag names like 'v2.0.0'
      const version = data.tag_name ? data.tag_name.replace(/^v/, "") : null;
      if (version)
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ version, ts: Date.now() }),
        );
      return version;
    } catch {
      return null;
    }
  }

  const latest = await fetchLatestRelease(REPOS[library]);
  if (!latest || latest === DOCUMENTED[library]) return;

  const repoName = REPOS[library];
  const banner = document.createElement("div");
  banner.className = "admonition warning";
  banner.innerHTML = `
    <p class="admonition-title">Documentation may be outdated</p>
    <p>
      These docs cover version <strong>${DOCUMENTED[library]}</strong>, but the latest release is
      <strong>${latest}</strong>.
      Check the <a href="https://github.com/snappyxo/${repoName}/releases" target="_blank" rel="noopener">release notes</a>
      for what's changed.
    </p>
  `;

  const target = document.querySelector(".md-content__inner, article");
  if (target) target.prepend(banner);
})();
