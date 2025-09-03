# 📦 Guía de Descarga - Matrix Portfolio

## 🎯 Tu Proyecto Está Listo Para Descargar

### 📋 **Archivos Principales del Proyecto:**

```
matrix-portfolio/
├── package.json              # Dependencias y scripts
├── next.config.ts           # Configuración Next.js
├── tailwind.config.js       # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── components.json         # Configuración shadcn/ui
├── postcss.config.mjs      # PostCSS config
├── README.md               # Documentación completa
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal (LIMPIO)
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales
│   ├── components/
│   │   ├── AboutSection.tsx     # Tu perfil y stats
│   │   ├── PostsSection.tsx     # Blog posts
│   │   ├── WriteupsSection.tsx  # CTF writeups  
│   │   ├── ProjectsSimple.tsx   # Tus proyectos
│   │   ├── GlitchText.tsx      # Efectos de texto
│   │   ├── Terminal.tsx        # Terminal interactiva
│   │   └── ui/
│   │       ├── matrix-button.tsx
│   │       ├── matrix-card.tsx
│   │       └── typing-effect.tsx
│   ├── hooks/
│   │   └── use-typing-effect.ts
│   └── lib/
│       ├── utils.ts
│       └── matrix-utils.ts     # Colores y constantes Matrix
└── public/                 # Assets estáticos
```

## 🚀 **Métodos de Descarga**

### Opción 1: Descarga Individual (Recomendado)
Copia manualmente cada archivo desde el sandbox a tu proyecto local:

1. **Crea nuevo proyecto Next.js:**
   ```bash
   npx create-next-app@latest matrix-portfolio --typescript --tailwind --eslint --app
   cd matrix-portfolio
   ```

2. **Instala dependencias adicionales:**
   ```bash
   pnpm add framer-motion lucide-react
   ```

3. **Copia los archivos principales:**
   - `src/app/layout.tsx` ✅
   - `src/app/page.tsx` ✅
   - Todos los archivos de `src/components/` ✅
   - Todos los archivos de `src/hooks/` ✅
   - Todos los archivos de `src/lib/` ✅

### Opción 2: Crear Repositorio Git
```bash
# En tu máquina local
mkdir matrix-portfolio
cd matrix-portfolio
git init
git remote add origin https://github.com/tu-usuario/matrix-portfolio.git

# Copia todos los archivos del sandbox
# Luego:
git add .
git commit -m "Initial Matrix portfolio setup"
git push -u origin main
```

## 🔧 **Pasos Post-Descarga**

### 1. Configuración Inicial
```bash
cd matrix-portfolio
pnpm install
pnpm dev  # Verifica que funcione
```

### 2. Personalizar Contenido
- **About**: Edita `src/components/AboutSection.tsx`
- **Posts**: Modifica array en `src/components/PostsSection.tsx`
- **Writeups**: Actualiza `src/components/WriteupsSection.tsx`
- **Projects**: Cambia datos en `src/components/ProjectsSimple.tsx`

### 3. Deploy en Vercel
1. Sube a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repo
4. ¡Deploy automático!

## 🎨 **Personalización Rápida**

### Cambiar Colores Matrix
En `src/lib/matrix-utils.ts`:
```typescript
export const MATRIX_COLORS = {
  primary: '#00ff41',    // Cambia por tu color preferido
  secondary: '#008f11',  // Color secundario
  // ...
};
```

### Modificar Información Personal
En `src/components/AboutSection.tsx`:
```typescript
// Línea ~30-40, cambia:
<h3 className="text-2xl font-mono text-green-400 font-bold">
  TU NOMBRE AQUÍ
</h3>
<p className="text-green-300 font-mono text-sm">
  Tu título profesional
</p>
```

### Actualizar Links Sociales
En el footer de `src/app/page.tsx`:
```typescript
// Línea ~120-130, cambia:
<div className="text-green-300">
  EMAIL: tu-email@dominio.com
</div>
<div className="text-green-300">
  GITHUB: github.com/tu-usuario
</div>
```

## 🔥 **Características Incluidas**

✅ **Terminal funcional** con comandos personalizables  
✅ **Efectos de texto** (typing, glitch) listos para usar  
✅ **Sistema de filtros** en posts y writeups  
✅ **Diseño responsive** perfecto para móviles  
✅ **Componentes modulares** fáciles de reutilizar  
✅ **TypeScript** configurado correctamente  
✅ **Tailwind CSS** con tema Matrix personalizado  

## 🚨 **Importante Para Deploy**

### Comandos Correctos:
```bash
# Para desarrollo
pnpm dev

# Para build (SIEMPRE con --no-lint)
pnpm build --no-lint

# Para producción
pnpm start
```

### En Vercel:
- **Build Command**: `pnpm build --no-lint`
- **Install Command**: `pnpm install`
- **Output Directory**: `.next`

---

## 🎉 **¡Proyecto Listo Para Personalizar!**

Tienes una base sólida de portfolio Matrix con:
- **Fondo negro limpio** (sin errores)
- **Componentes modulares** y reutilizables
- **Código bien organizado** y documentado
- **README completo** con toda la info necesaria

**URL ACTUAL**: [https://sb-s8ibpsuce48q.vercel.run](https://sb-s8ibpsuce48q.vercel.run)

¡Ahora puedes descargarlo, modificarlo y hacer deploy en tu propia cuenta de Vercel! 🚀💚