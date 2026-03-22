(() => {
  // ====== LINKS ======
  const CEREMONIA = "Señora de Guadalupe";
  const RECEPCION = "Plaza San Cruz";

  const RSVP_PHONE = "50400000000"; // <-- cambiá a tu número real
  const RSVP_TEXT  = "Hola, confirmo mi asistencia a la boda de Vilma y Josué el 12 de junio de 2026.";

  const links = {
    "map-ceremonia": mapsSearch(CEREMONIA),
    "map-recepcion": mapsSearch(RECEPCION),
    "rsvp": waLink(RSVP_PHONE, RSVP_TEXT),
  };

  // ====== HOTSPOTS (en % del PNG) ======
  // x,y,w,h en porcentajes (0-100)
  // IMPORTANTE: estos valores son PLACEHOLDER.
  // Vos solo los ajustás mirando tu PNG.
  const hotspots = {
    "map-ceremonia": { x: 18, y: 46, w: 28, h: 4.5 },
    "map-recepcion": { x: 54, y: 46, w: 28, h: 4.5 },
    "rsvp":          { x: 30, y: 92, w: 40, h: 5.0 },
  };

  const canvas = document.getElementById("canvas");
  const img = document.getElementById("baseImg");
  const hs = Array.from(document.querySelectorAll(".hotspot"));

  // aplica links
  hs.forEach(a => {
    const id = a.dataset.id;
    a.href = links[id] || "#";
  });

  // cuando cargue la imagen, posiciona
  img.addEventListener("load", () => layout());
  window.addEventListener("resize", () => layout());

  function layout(){
    const rect = img.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    hs.forEach(a => {
      const id = a.dataset.id;
      const r = hotspots[id];
      if (!r) return;

      a.style.left = (w * (r.x / 100)) + "px";
      a.style.top  = (h * (r.y / 100)) + "px";
      a.style.width  = (w * (r.w / 100)) + "px";
      a.style.height = (h * (r.h / 100)) + "px";
    });
  }

  function mapsSearch(place){
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  }

  function waLink(phone, text){
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
})();
