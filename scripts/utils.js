export function setDate() {
  const date = new Date();
  const weekday = date.toLocaleDateString("fa-IR", { weekday: "long" });
  const day = date.toLocaleDateString("fa-IR", { day: "numeric" });
  const month = date.toLocaleDateString("fa-IR", { month: "long" });
  const year = date.toLocaleDateString("fa-IR", { year: "numeric" });

  return `${weekday}، ${day} ${month} ${year}`;
}

export function toggleTheme() {
  const sunBtn = document.getElementById("sun-btn");
  const moonBtn = document.getElementById("moon-btn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  sunBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  });

  moonBtn.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  });
}
