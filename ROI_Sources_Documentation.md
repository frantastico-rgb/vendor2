# 📊 DOCUMENTACIÓN FUENTES ROI - PASSIO VÉRTICE

## 🎯 Propósito del Documento
Este documento establece las fuentes de información y metodología para mantener actualizada la **Calculadora ROI** de la presentación Passio Vértice. Permite actualizaciones periódicas con datos de mercado en tiempo real.

---

## 🗂️ FUENTES DE DATOS POR CATEGORÍA

### 🌍 **1. PRECIOS INTERNACIONALES**

#### **Aceites Esenciales Premium**
- **Alibaba.com** - B2B Marketplace
  - URL: `https://www.alibaba.com/trade/search?SearchText=passion+fruit+essential+oil`
  - Datos: Precios mayoristas, volúmenes mínimos, especificaciones técnicas
  - Frecuencia: Trimestral
  - Variables: `prices.planta.min/max`, `prices.hibrido.min/max`

- **Grand View Research** - Market Intelligence
  - URL: `https://www.grandviewresearch.com/industry-analysis/passion-fruit-oil-market`
  - Datos: Análisis de mercado, tendencias, proyecciones
  - Frecuencia: Semestral
  - Variables: Validación de rangos de precios

#### **Nutraceúticos y Extractos**
- **Nutrition Business Journal**
  - URL: `https://www.nutritionbusinessjournal.com/`
  - Datos: Precios ingredientes funcionales
  - Frecuencia: Trimestral

- **SupplySide Network**
  - URL: `https://www.supplysidenetwork.com/`
  - Datos: Precios B2B ingredientes naturales
  - Frecuencia: Mensual

---

### 🇨🇴 **2. MERCADO NACIONAL COLOMBIA**

#### **Índices Oficiales**
- **DANE** - Departamento Nacional de Estadística
  - URL: `https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-precios-al-productor-ipp`
  - Datos: IPP productos agroindustriales
  - Frecuencia: Mensual
  - Variables: Ajuste inflacionario a costos

- **FENALCE** - Federación Nacional de Cultivadores de Cereales
  - URL: `https://fenalce.org/`
  - Datos: Precios productos procesados
  - Frecuencia: Mensual

#### **Mercados Especializados**
- **Bolsa Mercantil de Colombia**
  - URL: `https://www.bolsamercantil.com.co/`
  - Datos: Precios commodities agrícolas
  - Frecuencia: Semanal

- **MADR** - Ministerio de Agricultura
  - URL: `https://www.minagricultura.gov.co/`
  - Datos: Boletines de precios mayoristas
  - Frecuencia: Semanal

---

### ⚡ **3. COSTOS OPERACIONALES**

#### **Energía y Servicios**
- **XM** - Expertos en Mercados
  - URL: `https://www.xm.com.co/`
  - Datos: Costos energía eléctrica industrial
  - Frecuencia: Mensual
  - Variables: Actualización costos proceso

- **CREG** - Comisión de Regulación de Energía y Gas
  - URL: `https://www.creg.gov.co/`
  - Datos: Tarifas servicios públicos
  - Frecuencia: Trimestral

#### **Mano de Obra**
- **MINTRABAJO** - Ministerio del Trabajo
  - URL: `https://www.mintrabajo.gov.co/web/guest/estadisticas`
  - Datos: Salarios mínimos sectoriales
  - Frecuencia: Anual
  - Variables: `staff` costs adjustment

---

### 🔬 **4. COSTOS TÉCNICOS ESPECÍFICOS**

#### **Equipos y Maquinaria**
- **Alibaba Industrial Equipment**
  - URL Destilación: `https://www.alibaba.com/trade/search?SearchText=essential+oil+distillation+equipment`
  - URL Extracción: `https://www.alibaba.com/trade/search?SearchText=botanical+extraction+equipment`
  - Datos: Precios equipos, capacidades, especificaciones
  - Frecuencia: Anual

#### **Insumos Químicos**
- **ChemSpider** - Chemical Database
  - URL: `http://www.chemspider.com/`
  - Datos: Precios reactivos y solventes
  - Frecuencia: Trimestral

- **Sigma-Aldrich** - Laboratory Chemicals
  - URL: `https://www.sigmaaldrich.com/`
  - Datos: Precios chemicals grado alimentario
  - Frecuencia: Semestral

#### **Certificaciones**
- **ICONTEC** - Instituto Colombiano de Normas Técnicas
  - URL: `https://www.icontec.org/`
  - Datos: Costos certificaciones orgánicas, HACCP, ISO
  - Frecuencia: Anual

---

## 🔄 **METODOLOGÍA DE ACTUALIZACIÓN**

### **Paso 1: Recopilación de Datos**
```javascript
// Plantilla de recopilación mensual
const updateData = {
    date: "2025-XX-XX",
    source: "nombre_fuente",
    product: "aceite|nutraceutico|pulpa",
    priceRange: { min: X, max: Y },
    marketConditions: "descripción",
    validated: false
};
```

### **Paso 2: Validación Cruzada**
- ✅ Comparar al menos 3 fuentes diferentes
- ✅ Verificar coherencia histórica (variación <30%)
- ✅ Validar con expertos sectoriales
- ✅ Documentar desviaciones significativas

### **Paso 3: Actualización del Código**
```javascript
// Ubicación: presentacion.html línea ~4380
function getProductData() {
    return {
        aceite: {
            prices: {
                maquila: { min: NEW_MIN, max: NEW_MAX }, // ← ACTUALIZAR AQUÍ
                planta: { min: NEW_MIN, max: NEW_MAX },
                hibrido: { min: NEW_MIN, max: NEW_MAX }
            },
            costs: { min: NEW_MIN, max: NEW_MAX }, // ← ACTUALIZAR AQUÍ
            // ... resto de datos
        }
    };
}
```

### **Paso 4: Testing y Validación**
- 🧪 Ejecutar casos de prueba conocidos
- 🧪 Verificar cálculos con escenarios extremos
- 🧪 Validar coherencia ROI vs mercado
- 🧪 Confirmar funcionalidad calculadora

---

## 📋 **CRONOGRAMA DE ACTUALIZACIONES**

| Frecuencia | Componente | Fuentes | Responsable |
|------------|------------|---------|-------------|
| **Semanal** | Precios locales | MADR, Bolsa Mercantil | Analista Junior |
| **Mensual** | Costos operacionales | DANE, XM, CREG | Analista Senior |
| **Trimestral** | Precios internacionales | Alibaba, Market Research | Especialista Mercados |
| **Semestral** | Análisis de tendencias | Grand View, Statista | Director Comercial |
| **Anual** | Costos técnicos/equipos | Proveedores, ICONTEC | Gerente Técnico |

---

## 📊 **VARIABLES CLAVE A MONITOREAR**

### **Aceite Esencial**
```javascript
// Rango de monitoreo
aceite: {
    yield: { min: 0.8, max: 1.2 }, // kg per 100kg fruit
    costs: { min: 48, max: 62 },   // USD per kg product
    prices: {
        maquila: { min: 180, max: 220 },  // Nacional
        planta: { min: 280, max: 350 },   // Exportación
        hibrido: { min: 280, max: 400 }   // Premium
    }
}
```

### **Indicadores de Alerta**
- 🚨 **Variación >30%** en precios mes a mes
- 🚨 **ROI <50%** en cualquier modelo
- 🚨 **Costos >70%** del precio de venta
- 🚨 **Yield <0.6kg** por 100kg fruta

---

## 🎯 **CASOS DE USO ESPECÍFICOS**

### **Actualización Rutinaria Mensual**
1. **Consultar** fuentes mensuales (DANE, MADR, XM)
2. **Registrar** datos en plantilla Excel/Google Sheets
3. **Validar** coherencia con mes anterior
4. **Actualizar** código si variación >15%
5. **Notificar** stakeholders si cambios significativos

### **Actualización de Emergencia**
- **Trigger:** Eventos de mercado (crisis, regulaciones, competencia)
- **Proceso:** Consulta inmediata fuentes principales
- **Decisión:** Actualizar si impacto >20% en ROI
- **Comunicación:** Alerta inmediata a equipo comercial

### **Actualización Estratégica Anual**
- **Revisión completa** de metodología
- **Incorporación** nuevas fuentes
- **Calibración** algoritmos predictivos
- **Validación** con resultados reales

---

## 📈 **MÉTRICAS DE CALIDAD**

### **Precisión de Datos**
- **Target:** <10% desviación vs precios reales
- **Medición:** Comparación trimestral con transacciones
- **Acciones:** Ajuste fuentes si desviación >15%

### **Actualidad de Información**
- **Target:** Datos <30 días antigüedad
- **Medición:** Timestamp última actualización
- **Acciones:** Alerta automática si >45 días

### **Cobertura de Mercado**
- **Target:** >80% mercado nacional + internacional
- **Medición:** % valor mercado cubierto por fuentes
- **Acciones:** Incorporar nuevas fuentes si <70%

---

## 🔧 **HERRAMIENTAS Y AUTOMATIZACIÓN**

### **Recomendaciones de Implementación**
1. **Google Sheets/Excel** con macros para recopilación
2. **Python scripts** para web scraping automático
3. **API integrations** con fuentes que lo permitan
4. **Dashboard Power BI** para visualización tendencias
5. **Alertas automáticas** por email/Slack

### **Código de Automatización (Opcional)**
```python
# Script para actualización automática
import requests
import json
from datetime import datetime

def update_roi_data():
    # Conectar fuentes API
    # Validar datos
    # Actualizar archivo JavaScript
    # Enviar notificaciones
    pass
```

---

## 📞 **CONTACTOS CLAVE**

### **Fuentes Institucionales**
- **DANE:** estadisticas@dane.gov.co
- **MADR:** atencionalciudadano@minagricultura.gov.co
- **FENALCE:** info@fenalce.org

### **Proveedores Técnicos**
- **Equipos destilación:** (Contactos específicos)
- **Certificaciones:** ICONTEC
- **Análisis químicos:** Laboratorios certificados

---

**Última actualización:** Octubre 8, 2025  
**Próxima revisión:** Enero 8, 2026  
**Responsable documento:** Equipo Passio Vértice  
**Versión:** 1.0

---

*Este documento es parte integral del sistema Passio Vértice y debe mantenerse actualizado para garantizar la precisión de las proyecciones ROI.*