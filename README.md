# 🚀 PASSIO VÉRTICE - ROI CALCULATOR SYSTEM

## 📋 Descripción General
Sistema completo de calculadora ROI interactiva para la presentación Passio Vértice, con capacidades de actualización automática de datos de mercado y fuentes documentadas para mantenimiento continuo.

---

## 📁 Estructura de Archivos

```
📂 vendor 2/
├── 📄 presentacion.html          # Presentación principal con calculadora ROI
├── 📄 index.html                 # Portal de acceso
├── 📄 admin.html                 # Panel administrativo
├── 📄 objetivos.html             # Objetivos del proyecto
├── 📄 ROI_Sources_Documentation.md    # 📚 Documentación completa de fuentes
├── 📄 ROI_Data_Template.csv      # 📊 Template datos históricos
├── 📄 roi_updater.py             # 🔧 Script automatización (opcional)
├── 📄 README.md                  # Este archivo
└── 🖼️ log_passio_vertice.png    # Logo del proyecto
```

---

## 🧮 Calculadora ROI - Características

### ✨ **Funcionalidades Principales**
- **Cálculo interactivo** de ROI para 3 productos (Aceite Esencial, Nutraceúticos, Pulpa)
- **3 modelos de negocio** (Maquila, Planta Propia, Híbrido)
- **Controles dinámicos** de volumen mensual (50-2000 kg)
- **Métricas en tiempo real** (ingresos, costos, utilidad, margen)
- **Análisis detallado** por producto con especificaciones técnicas
- **Comparación de inversiones** con tiempos de recuperación

### 📊 **Productos Analizados**

#### 🏆 **Aceite Esencial Premium**
- **ROI Potencial:** 65-95% según modelo
- **Rendimiento:** 0.8-1.2 kg por 100kg fruta
- **Precio Mercado:** $180-500/kg
- **Personal:** 3-5 técnicos especializados

#### 🌿 **Extractos Nutraceúticos**
- **ROI Potencial:** 45-80% según modelo
- **Rendimiento:** 8-12 kg por 100kg fruta
- **Precio Mercado:** $85-280/kg
- **Personal:** 2-4 técnicos

#### 🥤 **Pulpa Procesada Premium**
- **ROI Potencial:** 25-55% según modelo
- **Rendimiento:** 35-45 kg por 100kg fruta
- **Precio Mercado:** $12-45/kg
- **Personal:** 4-8 operarios

---

## 🚀 Instrucciones de Uso

### **1. Acceso a la Presentación**
```bash
# Opción A: Servidor local
cd "ruta/al/proyecto"
python -m http.server 8080
# Abrir: http://localhost:8080/presentacion.html

# Opción B: Abrir directamente en navegador
# Abrir: presentacion.html en navegador web
```

### **2. Navegación**
- Usar botones de navegación superiores
- Ir directamente a "💰 ROI Calculator"
- Controles interactivos para personalizar cálculos

### **3. Personalización de Cálculos**
1. **Seleccionar Modelo:** Maquila / Planta Propia / Híbrido
2. **Elegir Producto:** Aceite / Nutraceúticos / Pulpa
3. **Ajustar Volumen:** Slider 50-2000 kg/mes
4. **Ver Resultados:** Automático en tiempo real

---

## 🔄 Sistema de Actualización de Datos

### **Archivos de Mantenimiento**

#### 📚 `ROI_Sources_Documentation.md`
- **Fuentes completas** por categoría
- **URLs específicas** para cada tipo de dato
- **Frecuencias de actualización** recomendadas
- **Metodología de validación** de datos
- **Contactos clave** y responsables

#### 📊 `ROI_Data_Template.csv`
- **Historial de precios** por producto/modelo
- **Datos de validación** y fuentes
- **Template para nuevos datos**
- **Control de calidad** integrado

#### 🔧 `roi_updater.py` (Opcional)
- **Automatización** de recopilación de datos
- **Validación automática** vs históricos
- **Integración** con fuentes API
- **Reportes automáticos** de actualizaciones

---

## 📈 Proceso de Actualización

### **🔄 Actualización Manual (Recomendado)**

#### **Paso 1: Recopilar Datos**
```bash
# Consultar fuentes documentadas en ROI_Sources_Documentation.md
# Frecuencias:
# - Semanal: Precios locales (MADR, Bolsa Mercantil)
# - Mensual: Costos operacionales (DANE, XM)
# - Trimestral: Precios internacionales (Alibaba, Market Research)
# - Semestral: Análisis tendencias (Grand View, Statista)
```

#### **Paso 2: Validar Información**
- ✅ Comparar 3+ fuentes diferentes
- ✅ Verificar variación <30% vs histórico
- ✅ Documentar en `ROI_Data_Template.csv`
- ✅ Marcar como validado

#### **Paso 3: Actualizar Código**
```javascript
// Localizar en presentacion.html (línea ~4380)
function getProductData() {
    return {
        aceite: {
            prices: {
                maquila: { min: NUEVO_MIN, max: NUEVO_MAX }, // ← ACTUALIZAR
                planta: { min: NUEVO_MIN, max: NUEVO_MAX },
                hibrido: { min: NUEVO_MIN, max: NUEVO_MAX }
            },
            costs: { min: NUEVO_MIN, max: NUEVO_MAX }, // ← ACTUALIZAR
            // ... resto de datos
        }
    };
}
```

#### **Paso 4: Probar Cambios**
```bash
# Abrir presentación y verificar:
# 1. Calculadora funciona correctamente
# 2. Valores ROI son coherentes
# 3. No hay errores JavaScript
# 4. Datos se actualizan dinámicamente
```

### **🤖 Actualización Automática (Avanzado)**

#### **Configuración Inicial**
```bash
# Instalar dependencias
pip install requests pandas beautifulsoup4

# Configurar APIs y endpoints
# Editar roi_updater.py con credenciales

# Programar ejecución
# Windows: Task Scheduler
# Linux/Mac: Cron job
```

#### **Ejecución**
```bash
python roi_updater.py
# Genera reportes automáticos
# Actualiza CSV con nuevos datos
# Requiere validación manual antes de aplicar
```

---

## 🎯 Mejores Prácticas

### **✅ Hacer Siempre**
- Respaldar `presentacion.html` antes de cambios
- Validar datos con múltiples fuentes
- Probar calculadora después de actualizaciones
- Documentar cambios significativos
- Notificar stakeholders de actualizaciones

### **❌ Evitar**
- Actualizar con una sola fuente
- Cambios >30% sin validación extra
- Modificar código sin backup
- Datos sin timestamp/fuente
- Actualizaciones en horarios de presentación

### **📊 Monitoreo de Calidad**
- **Precisión:** <10% desviación vs precios reales
- **Actualidad:** Datos <30 días antigüedad
- **Cobertura:** >80% mercado representado
- **Consistencia:** Variaciones lógicas mes a mes

---

## 🔧 Troubleshooting

### **Problema: Calculadora no actualiza valores**
```javascript
// Verificar en consola del navegador (F12)
console.log("calculateROI function exists:", typeof calculateROI);

// Revisar errores JavaScript
// Verificar IDs de elementos HTML
```

### **Problema: Datos parecen incorrectos**
```bash
# Verificar fuentes en ROI_Sources_Documentation.md
# Comparar con datos históricos en CSV
# Validar cálculos manualmente
```

### **Problema: Presentación no carga**
```bash
# Verificar servidor local está corriendo
# Confirmar ruta de archivos
# Revisar permisos de archivos
# Probar en diferentes navegadores
```

---

## 📊 Métricas y KPIs

### **Indicadores de Performance**
- **Uso de calculadora:** Tiempo promedio de sesión
- **Precisión de datos:** % exactitud vs mercado real
- **Actualidad:** Días desde última actualización
- **Satisfacción:** Feedback usuarios de presentación

### **Alertas Automáticas**
- 🚨 Variación >30% en precios
- 🚨 ROI <50% en cualquier modelo
- 🚨 Datos >45 días antigüedad
- 🚨 Fuentes no accesibles

---

## 👥 Responsabilidades

| Rol | Frecuencia | Responsabilidad |
|-----|------------|----------------|
| **Analista Junior** | Semanal | Precios locales, datos MADR |
| **Analista Senior** | Mensual | Costos operacionales, validación |
| **Especialista Mercados** | Trimestral | Precios internacionales |
| **Director Comercial** | Semestral | Análisis tendencias, estrategia |
| **Gerente Técnico** | Anual | Costos equipos, certificaciones |

---

## 📞 Soporte y Contacto

### **Documentación Técnica**
- **Fuentes de datos:** Ver `ROI_Sources_Documentation.md`
- **Historial cambios:** Ver `ROI_Data_Template.csv`
- **Código automatización:** Ver `roi_updater.py`

### **Escalación de Problemas**
1. **Nivel 1:** Consultar este README
2. **Nivel 2:** Revisar documentación técnica
3. **Nivel 3:** Contactar equipo desarrollo
4. **Nivel 4:** Validar con expertos sectoriales

---

## 🔄 Historial de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| **1.0** | 2025-10-08 | Implementación inicial con calculadora ROI |
| **1.1** | TBD | Próximas mejoras basadas en feedback |

---

## 🚀 Próximas Mejoras

### **Funcionalidades Planificadas**
- [ ] **Dashboard admin** para gestión de datos
- [ ] **API REST** para integración externa
- [ ] **Alertas email** automáticas
- [ ] **Exportación PDF** de cálculos
- [ ] **Modo comparación** múltiples escenarios
- [ ] **Integración CRM** para seguimiento leads

### **Optimizaciones Técnicas**
- [ ] **PWA** (Progressive Web App)
- [ ] **Offline functionality**
- [ ] **Mobile responsive** mejorado
- [ ] **Performance optimization**
- [ ] **A/B testing** components

---

**¡Sistema Passio Vértice ROI Calculator listo para usar!** 🎉

*Para cualquier duda o sugerencia, consultar la documentación técnica o contactar al equipo de desarrollo.*