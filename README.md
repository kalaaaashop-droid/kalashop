# Kalas Shop — Catálogo web

Sitio de una sola página (landing catálogo) para **Kalas Shop**, tienda de ropa de mujer. Construido con **HTML + Tailwind CSS + JavaScript puro**. El sitio final (`index.html`, `css/`, `js/`) no necesita build ni servidor: se abre directo en el navegador o se sube a cualquier hosting estático (GitHub Pages, Netlify, Vercel, Hostinger, etc.). Tailwind se usa como **CSS ya compilado** (no el script CDN de Tailwind, que la propia documentación de Tailwind desaconseja para producción) — solo necesitas Node si quieres modificar clases y regenerar ese archivo.

## Estructura de archivos

```
kalas-shop/
├── index.html            # Toda la maquetación: header, hero, categorías, catálogo, footer
├── css/
│   ├── tailwind.css       # CSS de Tailwind ya compilado y minificado (no editar a mano)
│   ├── tailwind-input.css # Punto de entrada de Tailwind (@tailwind base/components/utilities)
│   └── styles.css         # Estilos que Tailwind no cubre (tarjetas, hover del botón, animaciones)
├── js/
│   └── script.js           # Interactividad: menú móvil, búsqueda, carrito, newsletter
├── tailwind.config.js      # Paleta de colores y tipografías de la marca
└── package.json            # Scripts para regenerar css/tailwind.css
```

## Secciones incluidas

1. **Header** sticky con logo, navegación, buscador, cuenta y carrito (con contador).
2. **Hero** a pantalla completa con imagen de fondo y llamada a la acción.
3. **Categorías**: Vestidos, Blusas, Conjuntos, Accesorios.
4. **Catálogo**: grilla de 6 productos de ejemplo, con botón "Añadir al carrito" que aparece al pasar el mouse sobre la tarjeta y cambia de color al pasar el mouse sobre el botón mismo.
5. **Footer**: descripción de marca, políticas, newsletter y redes sociales.
6. **Botones flotantes** de WhatsApp e Instagram, siempre visibles en la esquina inferior derecha.

## Cómo personalizarlo

- **Textos y precios**: edita directamente el HTML dentro de `<section id="catalogo">`.
- **Fotos de productos**: reemplaza las URLs de Unsplash (`https://images.unsplash.com/...`) por las fotos reales de tus prendas. Puedes subir las imágenes a la carpeta `img/` y usar rutas relativas como `img/vestido-midi.jpg`.
- **Colores**: están definidos en `tailwind.config.js` (`cream`, `beige`, `blush`, `ink`). Cambia los códigos hexadecimales y luego corre `npm install && npm run build:css` para regenerar `css/tailwind.css`.
- **WhatsApp / Instagram**: los enlaces ya están conectados a tus cuentas reales en el footer y en los botones flotantes.
- **Carrito**: por ahora el contador es solo visual (en memoria del navegador). Para un carrito funcional con pagos reales, el siguiente paso sería integrar una plataforma como Shopify, WooCommerce o un backend propio.
- **Newsletter**: el formulario actualmente solo muestra un mensaje de confirmación. Para capturar correos de verdad, conéctalo a un servicio como Mailchimp o Brevo (se indica el punto exacto en `js/script.js`).

## Cómo verlo

Simplemente abre `index.html` en tu navegador, o publícalo gratis en **GitHub Pages**:
Settings → Pages → Deploy from branch → selecciona la rama y la carpeta raíz.
