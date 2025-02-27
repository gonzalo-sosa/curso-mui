# Curso Material UI

[![Material-UI](https://img.shields.io/badge/Material--UI-0081cb?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)

## ¿Porqué Material-UI?

**Material-UI** (conocido como **MUI**) es una biblioteca de interfaz de usuario para React que implementa la interfaz de usuario de Google, incluyendo componentes y estilos basados en [Material Design](https://m2.material.io/).

## ¿Cómo surge Material-UI?

**MUI** Surgió como un proyecto de código abierto en 2014, creado por **Olivier Tassinari** y **Hai Nguyen**, con el objetivo de facilitar la creación de interfaces de usuario modernas y consistentes en aplicaciones web.

### Orígenes y motivación

1. **Material Design**: En 2014, Google presentó Material Design, un sistema de diseño que combina principios clásicos del diseño gráfico con innovaciones tecnológicas. Este enfoque se centra en la simplicidad, el uso de sombras, transiciones y colores vibrantes para crear interfaces intuitivas y atractivas.

2. **Necesidad de una implementación en React**: En ese momento, React estaba ganando popularidad como una biblioteca para construir interfaces de usuario, pero no existía una solución robusta que integrara Material Design con React. Material-UI surgió para llenar ese vacío, proporcionando componentes reutilizables y personalizables que seguían las directrices de Material Design.

3. **Código abierto**: Desde el principio, Material-UI se lanzó como un proyecto de código abierto bajo la licencia MIT, lo que permitió a la comunidad contribuir y mejorar la biblioteca. Esto ayudó a que creciera rápidamente en popularidad.

### Evolución

- **Primeras versiones**: Las primeras versiones de Material-UI se centraron en implementar los componentes básicos de Material Design, como botones, tarjetas, barras de aplicaciones y menús.
- **Adopción masiva**: Gracias a su facilidad de uso y su integración con React, Material-UI se convirtió en una de las bibliotecas de componentes más populares para desarrolladores de frontend.
- **Expansión**: Con el tiempo, el equipo detrás de Material-UI amplió la biblioteca para incluir más componentes, temas personalizables, soporte para temas oscuros y herramientas avanzadas como **styled-components** y **emotion**.
- **Rebranding a MUI**: En 2021, Material-UI cambió su nombre a **MUI** para reflejar su evolución más allá de Material Design. Ahora ofrece no solo componentes basados en Material Design, sino también soluciones como **MUI Core** y **MUI X**, que incluyen componentes avanzados como tablas de datos y herramientas de gestión de estado.

## Alternativas

Alternativas a Material-UI incluyen bibliotecas como Bootstrap, Tailwind CSS, Bulma, Semantic UI, Radix UI, Chakra UI, entre otras. Cada una de estas bibliotecas tiene sus propias ventajas y desventajas, y la elección de la que se use depender de las necesidades, conocimientos y preferencias del desarrollador.

## Comparaciones con otros frameworks

| **Framework**       | **Velocidad de Carga**                  | **Tamaño (prod/gzip)**                                                                                                               | **Dependencias**              | **Nivel de Conocimiento**                 | **Customización**                            | **Accesibilidad**              | **Experiencia de desarrollo**      | **Mejor uso**                                                                                  |
| ------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ----------------------------------------- | -------------------------------------------- | ------------------------------ | ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Material UI**     | 🟠 Moderado (tree-shaking crítico)      | [~21MB(sin peer-dependencies) (~566kB bundle)](https://pkg-size.dev/@mui%2Fmaterial%20@emotion%2Freact%20@emotion%2Fstyled?no-peers) | React, Emotion                | Medio-Alto (React + Material Design)      | Alta (con temas y estilos personalizados)    | ✅✅ (MD Guidelines)           | Muy Buena (muchas herramientas)    | Aplicaciones empresariales con diseño consistente y alto nivel de UI predefinida.              |
| **Chakra UI**       | 🟢 Alta (React optimizado)              | [~11MB (sin peer-dependencies) (~761KB bundle)](https://pkg-size.dev/@chakra-ui%2Freact?no-peers)                                    | React, Emotion                | Medio (React + CSS-in-JS)                 | Muy Alta (API sencilla para estilos)         | ✅✅✅ (a11y por diseño)       | Buena (integración con React)      | Proyectos que priorizan accesibilidad y customización ágil.                                    |
| **Radix UI**        | 🟢🟢 Máxima (headless - sin estilos)    | [~4.3MB (sin peer-dependencies) (~222kB bundle)](https://pkg-size.dev/radix-ui?no-peers)                                             | React                         | Medio-Alto (React + CSS puro o librerías) | Máxima (componentes sin estilos por defecto) | ✅✅✅ (enfoque en ARIA)       | Buena (documentación y ejemplo)    | Proyectos que requieren componentes accesibles y total control estilístico (ej. con Tailwind). |
| **Bootstrap**       | 🟠 Moderado (mejora con purgado de CSS) | [82KB minified (25KB gzip)](https://pkg-size.dev/bootstrap)                                                                          | jQuery (opcional en v5+)      | Bajo (HTML/CSS básico)                    | Sass + Variables CSS                         | ✅ (v5+)                       | Prototipado rápido                 | Equipos no técnicos o MVP simples.                                                             |
| **React Bootstrap** | 🟢 Alta (sin jQuery)                    | [~17MB (sin peer-deps) (~197kB bundle)](https://pkg-size.dev/react-bootstrap%20bootstrap?no-peers)                                   | React, Bootstrap (sin jQuery) | Medio (React + Bootstrap)                 | Media (props y temas)                        | ✅ (hereda v5+)                | Buena (componentes React modernos) | Proyectos React que necesitan Bootstrap con integración accesible.                             |
| **Tailwind CSS**    | 🟢🟢 Máxima (JIT + PurgeCSS)            | [~563kB (core) (~191kB bundle)](https://pkg-size.dev/tailwindcss)                                                                    | PostCSS, Autoprefixer         | Alto (sistema de utilidades)              | Máxima (desde cero con clases)               | ❌ (depende del desarrollador) | Excelente (configuración flexible) | Proyectos con diseño único y máximo rendimiento.                                               |

_a11y(accessibility)_>

## ¿Cuándo elegir cada framework?

1. Material UI
   ✔️ Ideal para: Equipos que necesitan una UI corporativa rápida y consistente (ej: dashboards de administración).

⚠️ Cuidado: El bundle crece si no se usa tree-shaking. Evitar si se busca un diseño único.

2. Chakra UI
   ✔️ Ideal para: Proyectos React que exigen accesibilidad desde el día 1 (ej: apps de salud/gobierno).

⚠️ Cuidado: Menos componentes que Material UI, pero más flexible.

3. Radix UI
   ✔️ Ideal para: Developers que quieren componentes accesibles sin estilos impuestos (ej: combinar con CSS Modules o Tailwind, Styled Components, etc).

⚠️ Cuidado: Requiere tiempo para integrar estilos desde cero.

4. Bootstrap / React Bootstrap
   ✔️ Ideal para: Prototipado rápido o equipos con poca experiencia en CSS.

⚠️ Cuidado: React Bootstrap es mejor opción que vanilla para proyectos modernos (sin jQuery).

5. Tailwind CSS
   ✔️ Ideal para: Proyectos donde el diseño es único y el rendimiento es crítico (ej: landing pages).

⚠️ Cuidado: Requiere dominio de clases utilitarias.

## Recomendaciones clave para elegir

1. Prioriza rendimiento:

- 🚀 Tailwind o Radix UI si el tamaño del bundle es crítico.

2. Accesibilidad (a11y):

- ✔ Chakra UI o Radix para cumplir WCAG/estándares altos.

3. Rapidez de desarrollo:

- ⏱️ Bootstrap o Material UI para MVP o equipos pequeños.

4. Diseño custom:

- 🎨 Tailwind + Radix UI para libertad total sin sacrificar a11y.

5. Ecosistema:

- 📚 Material UI y Bootstrap tienen más recursos y comunidad.
