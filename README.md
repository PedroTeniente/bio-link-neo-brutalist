# Thunder Bio Link Page ⚡️

Una página web interactiva estilo "bio link" (alternativa a Linktree) con un diseño **Neo-Brutalista**, diseñada para conversiones y captura de leads.

## Características

- 🎨 **Diseño Neo-Brutalista:** Basado en colores vibrantes, alto contraste, bordes negros gruesos y sombras duras.
- 🔄 **Avatar Interactivo:** Animación flip 3D (giro) al pasar el mouse en escritorio y automáticamente cada 2 segundos en móviles.
- 📥 **Captura de Leads (Newsletter):** Formulario listo e integrado en JavaScript apuntando a un Webhook (n8n/Make).
- 🎁 **Lead Magnet (Toolkit):** Botón CTA que simula carga y redirige a la descarga de recursos.
- 📱 **Totalmente Responsivo:** Adaptado a cualquier pantalla.

## Archivos Principales

- `index.html`: Estructura semántica base.
- `style.css`: Todo el sistema de diseño neo-brutalista (basado en variables CSS).
- `script.js`: Toda la lógica de eventos, fetch a webhooks web y redirecciones en tiempo real sin recargar la página.

## Cómo usar el Webhook de Correos

Si abres el archivo `script.js` encontrarás comentada la sección del `fetch`. Solo necesitas:
1. Conseguir la URL pública de tu Webhook en **n8n**.
2. Reemplazar la variable `WEBHOOK_URL`.
3. Descomentar el bloque del fetch para que cada que un usuario ponga su correo, este se envíe automáticamente por POST a tu servidor.

## Tecnologías
HTML5, Vanilla CSS3 y Vanilla JavaScript (Cero dependencias pesadas).