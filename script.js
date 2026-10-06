// WhatsApp number used for every "Order" button and the quote form (country code, digits only).
const WHATSAPP = "254728926971";

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Open / closed badge and today's hours, in Nairobi time
const HOURS = { 0: null, 1: [8, 19], 2: [8, 19], 3: [8, 19], 4: [8, 19], 5: [8, 19], 6: [8, 16] };
(function openStatus() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi", weekday: "short", hour: "numeric", minute: "numeric", hour12: false,
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hour = Number(get("hour")) + Number(get("minute")) / 60;
  const today = HOURS[day];
  const open = !!today && hour >= today[0] && hour < today[1];

  document.querySelectorAll("[data-open-pill]").forEach((pill) => {
    pill.textContent = open ? "Open now" : "Closed now";
    pill.classList.add(open ? "open" : "closed");
    pill.hidden = false;
  });
  document.querySelectorAll(`.hours tr[data-day="${day}"]`).forEach((tr) => tr.classList.add("today"));
})();

// "Order on WhatsApp" buttons on the services page
document.querySelectorAll("[data-order]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(waLink(`Hi Bluebutton, I'd like a quote for: ${btn.dataset.order}`), "_blank", "noopener");
  });
});

// Portfolio filters
const chips = document.querySelectorAll(".chip[data-filter]");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("active", c === chip));
    const f = chip.dataset.filter;
    document.querySelectorAll("#gallery .tile").forEach((tile) => {
      tile.hidden = f !== "all" && tile.dataset.cat !== f;
    });
  });
});

// Quote form: opens WhatsApp with the request filled in
const form = document.getElementById("quote-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const lines = [
      "Hi Bluebutton, I'd like a quote.",
      `Name: ${f.get("name")}`,
      f.get("phone") && `Phone: ${f.get("phone")}`,
      `Service: ${f.get("service")}`,
      f.get("qty") && `Quantity: ${f.get("qty")}`,
      f.get("date") && `Needed by: ${f.get("date")}`,
      f.get("details") && `Details: ${f.get("details")}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}
