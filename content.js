navigator.getBattery().then(battery => {
  const initialOpacity = 1 - battery.level
  document.body.style.opacity = initialOpacity
  battery.addEventListener('levelchange', () => document.body.style.opacity = 1 - battery.level)
})