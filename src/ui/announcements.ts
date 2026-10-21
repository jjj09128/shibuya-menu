import { APP_VERSION, CHANGELOG } from "./changelog";

export function initAnnouncements(): void {
  const modal = document.querySelector<HTMLElement>("#notice-modal");
  const list = document.querySelector<HTMLElement>("#notice-list");
  const versionTag = document.querySelector<HTMLElement>("#version-tag");
  const openButton = document.querySelector<HTMLButtonElement>("#notice-open");
  const closeButton = document.querySelector<HTMLButtonElement>(".modal__close");
  if (!modal || !list || !versionTag || !openButton || !closeButton) {
    return;
  }

  versionTag.textContent = `v${APP_VERSION}`;

  for (const entry of CHANGELOG) {
    const article = document.createElement("article");
    article.className = "log";

    const head = document.createElement("div");
    head.className = "log__head";

    const version = document.createElement("span");
    version.className = "log__version";
    version.textContent = entry.version;

    const title = document.createElement("h3");
    title.className = "log__title";
    title.textContent = entry.title;

    head.append(version, title);

    if (entry.version === APP_VERSION) {
      const badge = document.createElement("span");
      badge.className = "log__badge";
      badge.textContent = "当前版本";
      head.append(badge);
    }

    const date = document.createElement("p");
    date.className = "log__date";
    date.textContent = entry.date;

    const notes = document.createElement("ul");
    notes.className = "log__notes";
    for (const note of entry.notes) {
      const item = document.createElement("li");
      item.textContent = note;
      notes.append(item);
    }

    article.append(head, date, notes);
    list.append(article);
  }

  let lastFocused: HTMLElement | null = null;

  const open = (): void => {
    lastFocused = document.activeElement as HTMLElement | null;
    modal.hidden = false;
    document.documentElement.classList.add("modal-open");
    closeButton.focus();
  };

  const close = (): void => {
    modal.hidden = true;
    document.documentElement.classList.remove("modal-open");
    lastFocused?.focus();
  };

  openButton.addEventListener("click", open);
  closeButton.addEventListener("click", close);

  modal.querySelectorAll<HTMLElement>("[data-close]").forEach((element) => {
    element.addEventListener("click", close);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      close();
    }
  });
}
