(async function () {
  const DOCUMENTED = {
    microblue: "2.0.0",
    snappyxoshield: "0.2.0",
  };

  const REPOS = {
    microblue: "microblue-arduino",
    snappyxoshield: "SnappyXOShield",
  };

  // Returns 'newer', 'older', 'equal', or 'patch-only' if only the patch changed
  function classifyDiff(documented, latest) {
    if (
      !compareVersions.validate(documented) ||
      !compareVersions.validate(latest)
    )
      return "equal";
    const result = compareVersions.compareVersions(latest, documented);
    if (result === 0) return "equal";
    if (result < 0) return "older";
    const d = documented.split(".").map(Number);
    const l = latest.split(".").map(Number);
    if (l[0] === d[0] && l[1] === d[1]) return "patch-only";
    return "newer";
  }

  const path = window.location.pathname;
  let library = null;
  if (path.includes("/microblue/")) library = "microblue";
  else if (path.includes("/snappyxoshield/")) library = "snappyxoshield";
  if (!library) return;

  async function fetchLatestRelease(repo) {
    const mock = new URLSearchParams(window.location.search).get(
      "mock_release",
    );
    if (mock) return mock;

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
  if (!latest) return;

  const diff = classifyDiff(DOCUMENTED[library], latest);
  if (diff === "equal" || diff === "older") return;

  const repoName = REPOS[library];
  const releasesUrl = `https://github.com/snappyxo/${repoName}/releases`;

  const banner = document.createElement("div");

  if (diff === "patch-only") {
    banner.className = "admonition note";
    banner.innerHTML = `
      <p class="admonition-title">Minor version difference</p>
      <p>
        These docs cover version <strong>${DOCUMENTED[library]}</strong>. The latest release is
        <strong>${latest}</strong>, a bugfix update only. The documentation is likely still accurate.
        Check the <a href="${releasesUrl}" target="_blank" rel="noopener">release notes</a> for details.
      </p>
    `;
  } else {
    banner.className = "admonition warning";
    banner.innerHTML = `
      <p class="admonition-title">Documentation may be outdated</p>
      <p>
        These docs cover version <strong>${DOCUMENTED[library]}</strong>, but the latest release is
        <strong>${latest}</strong>. Some information may no longer be accurate.
        Check the <a href="${releasesUrl}" target="_blank" rel="noopener">release notes</a> for what's changed.
      </p>
    `;
  }

  const target = document.querySelector(".md-content__inner, article");
  if (target) target.prepend(banner);
})();
