# Material UI

## Instalación con Emotion (DEFAULT)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## Instalación con Styled Components

```bash
npm install @mui/material @mui/styled-engine-sc styled-components
```

## Fuentes

```bash
npm install @fontsource/roboto
```

```jsx
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

## Iconos

```bash
npm install @mui/icons-material
```

## CSS Baseline

Componente que asegura un CSS reset compatible con todos los navegadores modernos y proporciona un estilo base para la aplicación.

```jsx
import { CssBaseline } from "@mui/material";
import ButtonExample from "./components/ButtonExample";

function App() {
  return <CssBaseline>{/* ... */}</CssBaseline>;
}

export default App;
```
