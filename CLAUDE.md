# Proyecto Análisis de Datos 2026

Proyecto académico de análisis de datos en Python. Trabaja en Google Colab con Google Drive, y localmente en VS Code.

## Entregas
- **1ª entrega:** 12-06-2025 — Limpieza e integración de datos
- **2ª entrega:** 26-06-2025 — Visualización e insights
- **Examen:** 07-07-2025 — Presentación Streamlit (grupal + individual)

## Stack
- Python 3.12
- `fireducks` (reemplaza pandas, misma API)
- `pandas`, `numpy`
- `matplotlib` / `seaborn` para visualizaciones
- `streamlit` para la presentación final
- Google Colab + Google Drive (entorno principal)

## Estructura
```
app/
├── notebooks/         # Jupyter notebooks (.ipynb)
│   └── Proyecto2026.ipynb
├── data/              # Datasets locales (excluidos del repo por tamaño)
├── streamlit/         # Aplicativo Streamlit (entrega 3)
└── docs/              # Rúbricas PDF
```

## Datasets (5 fuentes)
| Variable | Descripción | Filas | Cols | Separador | Encoding |
|---|---|---|---|---|---|
| `df1` | Titulados universitarios 2007-2024 | 218.566 | 42 | `;` | latin-1 |
| `df2` | Matrículas universitarias 2007-2025 | 264.258 | 59 | `;` | latin-1 |
| `df3` | Licencias médicas Isapre 2025-T1 | 292.155 | 45 | `\|` | latin-1 |
| `df4/df4b/df4c` | Gastos campaña parlamentaria 2025 (Excel, múltiples hojas) | ~97.000+ | 6-21 | - | - |
| `df5/df5b/df5c` | Gastos campaña municipal 2024 (Excel, múltiples hojas) | ~352.000+ | 6-21 | - | - |

### Columnas df3 (Licencias Médicas) — renombradas
CodigoIsapre, FechaInformacion, RunTrabajador, FechaEmisionLicencia, NumeroDias, FechaInicioReposo, EdadTrabajador, SexoTrabajador, ActividadLaboral, Ocupacion, TipoLicencia, CaracteristicasReposo, RunProfesional, TipoProfesional, TipoLicenciaContraloria, NumeroDiasAutorizados, DiagnosticoPrincipal, TipoResolucion, Periodo, ReposoAutorizado, DerechoSubsidio, FechaRecepcionIsapre, FechaResolucionIsapre, FechaRecepcionEmpleador, Region, CalidadTrabajador, EntidadPagadora, NumeroDiasPagar, MontoSubsidioLiquido, MontoAportePrevisionalIsapre, FechaInicioPago, Recuperabilidad, FechaConcepcion, MontoAportePrevisionalPensiones, OtrosDiagnosticos, RunHijo, LugarReposo, CausaRechazoModificacion, NumeroDiasPreviosAutorizados, FechaPrimeraAfiliacionPrevisional, FechaContratoTrabajo, MontoBaseCalculoSubsidio, RutEmpleador, FechaNacimientoHijo

## Rúbricas (criterios, máx 3 pts c/u)

### Rúbrica 1 — Limpieza e Integración de Datos
1. Claridad, limpieza y estructura del notebook (secciones, reproducible)
2. Integración de fuentes externas (justificada)
3. Identificación y tratamiento de valores nulos (estrategias justificadas)
4. Conversión de tipos de datos (variables al tipo correcto)
5. Normalización, renombrado y selección de columnas relevantes
6. Justificación del proceso de limpieza e imputación
7. Pertinencia respecto a los objetivos y preguntas
8. Análisis exploratorio EDA (estadísticas descriptivas, primeras observaciones)
9. Informe escrito — Contenido (limpieza, integración, hallazgos)
10. Informe escrito — Diseño y riqueza visual (tablas, secciones, estilo)

### Rúbrica 2 — Visualización e Insights
1. Incorporación del feedback de la primera parte
2. Selección adecuada de visualizaciones (pertinentes y variadas)
3. Claridad y diseño gráfico (rotulados, legibles)
4. Narrativa visual: interpretación de gráficos
5. Comparación entre subgrupos o tendencias (justificadas)
6. Identificación de patrones, cambios o anomalías (con hipótesis)
7. Vinculación con objetivos y preguntas del proyecto
8. Propuesta de nuevos insights o líneas de análisis
9. Informe escrito — Contenido e interpretación
10. Informe escrito — Formato y riqueza visual

### Rúbrica 3 — Streamlit (Grupal + Individual)
**Grupal:**
1. Funcionalidad y navegación del aplicativo Streamlit
2. Coherencia y cobertura del análisis (limpieza → insights → objetivos)
3. Claridad del discurso grupal (roles distribuidos, buen ritmo)
4. Propuesta de mejora o expansión futura

**Individual:**
1. Dominio del contenido presentado
2. Claridad y expresión oral
3. Capacidad de responder preguntas con evidencia

## GitHub
- Repositorio: https://github.com/ivanignaciobahamondes/app
- Rama principal: main
