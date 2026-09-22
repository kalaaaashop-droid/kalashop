/* ==========================================================
   Kalas Shop — interactividad (Vanilla JS, sin dependencias)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollShadow();
  initHeroSlider();
  initMobileMenu();
  initSearchToggle();
  initCart();
  initNewsletterForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- Carrusel del hero ---------- */
function initHeroSlider() {
  const track = document.getElementById('hero-track');
  if (!track) return;

  const dots = document.querySelectorAll('.hero-dot');
  const slideCount = track.children.length;
  const intervalMs = 5000;
  let index = 0;
  let timer = null;

  function goTo(i) {
    index = (i + slideCount) % slideCount;
    track.style.transform = `translateX(-${index * (100 / slideCount)}%)`;
    dots.forEach((dot, di) => dot.classList.toggle('active', di === index));
  }

  function startAutoplay() {
    timer = setInterval(() => goTo(index + 1), intervalMs);
  }

  function resetAutoplay() {
    clearInterval(timer);
    startAutoplay();
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index));
      resetAutoplay();
    });
  });

  goTo(0);
  startAutoplay();
}

/* ---------- Header: sombra al hacer scroll ---------- */
function initHeaderScrollShadow() {
  const header = document.getElementById('site-header');
  const toggleShadow = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  toggleShadow();
  window.addEventListener('scroll', toggleShadow, { passive: true });
}

/* ---------- Menú móvil ---------- */
function initMobileMenu() {
  const button = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('flex');
    menu.classList.toggle('hidden', !isOpen);
    button.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Cierra el menú al elegir una opción
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      button.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

/* ---------- Barra de búsqueda ---------- */
function initSearchToggle() {
  const button = document.getElementById('search-toggle');
  const bar = document.getElementById('search-bar');

  button.addEventListener('click', () => {
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
      bar.querySelector('input').focus();
    }
  });
}

/* ---------- Carrito de compras (contador simple en memoria) ---------- */
function initCart() {
  const cartCount = document.getElementById('cart-count');
  const toast = document.getElementById('toast');
  let itemsInCart = 0;
  let toastTimer = null;

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      itemsInCart += 1;
      cartCount.textContent = itemsInCart;

      const productName = button.dataset.name || 'Producto';
      showToast(`"${productName}" añadido al carrito`);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('opacity-100');
      toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2200);
  }
}

/* ---------- Formulario de newsletter ---------- */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const message = document.getElementById('newsletter-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí se conectaría un servicio real de email marketing
    // (Mailchimp, Brevo, etc.) mediante fetch() a su API.
    form.reset();
    message.classList.remove('hidden');
    setTimeout(() => message.classList.add('hidden'), 4000);
  });
}
