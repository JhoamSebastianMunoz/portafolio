# AGENTS.md

Portafolio personal estático de Jhoam Sebastián Muñoz — Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS 4. Desplegado en Vercel como sitio 100% estático.

## Stack obligatorio

El stack principal y permitido para nuevas funcionalidades:

- **Next.js** · **React** · **TypeScript** · **Tailwind CSS**

### Reglas de arquitectura

- TypeScript es el lenguaje principal y obligatorio.
- **No crear archivos Python ni agregar dependencias Python.**
- No introducir otro lenguaje de backend salvo aprobación explícita.
- Mantener las funcionalidades existentes. Antes de modificar una, analizar sus dependencias y consumidores.
- Preferir soluciones nativas del ecosistema Next.js/TypeScript; evitar cambios fuera del alcance de la tarea.
- Mantener tipado fuerte, separación clara de responsabilidades y reutilizar componentes/utilidades antes de duplicar.
- Respetar las convenciones actuales; no cambiar la arquitectura global sin justificarlo primero.

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción con Turbopack (typecheck TS + HTML estático)
- `npm run lint` — ESLint 9 (flat config, `eslint.config.mjs`)
- `npm run start` — sirve el build de producción
- **No hay test runner ni tests** — no inventar comandos de test

### Puerta de calidad (obligatoria antes de terminar una tarea)

Ejecutar, en orden: `npm run lint` → typecheck (cubierto por `npm run build`) → `npm run build` → revisar los cambios realizados.

## Arquitectura

- Página única `/` (`src/app/page.tsx`) compone secciones en `src/components/*`. No hay `src/app/api/`, middleware, base de datos ni `.env*`; sin llamadas de red en runtime.
- **Todo el contenido vive en `src/lib/portfolio-data.ts`** (proyectos, experiencia, educación, 28 certificaciones, stats, techStack, links, perfil). Editar contenido ahí, no en componentes.
- Tipos en `src/types/portfolio.ts`; alias `@/*` → `src/*`.
- `page.tsx` es Server Component; las secciones son `'use client'` (Framer Motion + `react-intersection-observer`).
- Mantener rutas, SEO, metadata, routing y comportamiento visual existentes a menos que la tarea lo requiera.

## Convenciones React / Next.js

- Respetar la versión de Next.js instalada; **no cambiar de versión sin autorización explícita.**
- Diferenciar Server/Client Components; **evitar `'use client'` cuando no sea necesario.**
- No modificar SEO, metadata, routing ni comportamiento visual fuera del alcance de la tarea.

## Convenciones TypeScript

- Mantener `strict` (ya habilitado).
- Crear interfaces/types reutilizables; evitar duplicación de tipos.
- **Evitar `any`** salvo justificación técnica.
- Funciones pequeñas y cohesivas; manejar errores y valores opcionales correctamente.

## Convenciones Tailwind CSS

- Usar Tailwind para estilos; **no introducir otro framework CSS.**
- Respetar el sistema visual actual (gradientes purple→blue sobre `slate-950`; secciones claras con bordes `gray-100`); reutilizar patrones existentes.
- Mantener responsive design. No reemplazar estilos existentes sin necesidad.

## Quirks del toolchain

- **Tailwind v4, configuración CSS-first**: tokens de tema en `src/app/globals.css` bajo `@theme`. NO existe `tailwind.config.*` — no crearlo ni buscarlo.
- `next.config.ts` permite imágenes remotas (cualquier hostname) y optimiza a AVIF/WebP.
- Tipografía: Inter vía `next/font/google`, variable `--font-inter`.
- **Metadata y JSON-LD en `src/app/layout.tsx` con dominio canónico hardcodeado** (`https://jhoamsebastianmunoz.vercel.app`, incl. `og:image`). Al cambiar dominio, actualizar ahí. El README referencia un dominio demo distinto.
- Respetar `prefers-reduced-motion` (cubierto en `globals.css`).

## Edición de contenido frecuente

- Foto de perfil: `public/images/profile/photo_jhoam_munoz.jpg` (via `next/image` en `AboutSection.tsx` y `og:image` en `layout.tsx`). Los assets de `public/` deben estar commiteados para que el sitio desplegado los sirva.

## Python / `.agents/` (señuelo)

- La única carpeta con Python del repo es `.agents/skills/ui-ux-pro-max/` — **tooling interno del asistente, NO código de la aplicación**. No se despliega, no lo usa el runtime, no debe migrarse ni eliminarse como parte del portafolio.
- Regla de higiene: nunca debe aparecer un `.py` bajo `src/` o `public/`.
- `skills-lock.json` registra las skills instaladas; `.agents/skills/*` es infraestructura gestionada del asistente.

## Git

No ejecutar sin autorización explícita:

- `git push --force`
- `git reset --hard`
- Eliminación masiva de archivos
- Modificación de commits históricos

## Proceso de trabajo (OpenCode)

1. **Analizar** el código relacionado e identificar dependencias.
2. **Proponer el plan** antes de implementar.
3. **Implementar el cambio mínimo** necesario.
4. **Verificar** con la puerta de calidad.
5. **Informar** exactamente qué archivos fueron modificados.
6. Si hay **incertidumbre arquitectónica**, detenerse y explicarla antes de cualquier cambio destructivo.