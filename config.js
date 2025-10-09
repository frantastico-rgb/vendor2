// 🔐 SISTEMA DE CÓDIGOS DE ACCESO - PASSIO VÉRTICE
// =================================================

// 🔧 CÓDIGOS PERMANENTES (Administrador)
const ADMIN_CODES = {
    'ADMIN2025': {
        type: 'admin',
        name: 'Administrador Principal',
        created: '2025-10-08',
        permanent: true,
        redirectTo: 'presentacion.html'
    }
};

// 📊 CÓDIGOS TEMPORALES (Clientes)
const DEFAULT_CLIENT_CODES = {
    'DEMO2025': {
        type: 'client',
        name: 'Cliente Demo',
        created: '2025-10-08',
        validDays: 30,
        permanent: false,
        redirectTo: 'presentacion.html'
    }
};

// 🚀 CLASE PRINCIPAL DEL SISTEMA
class AccessCodeManager {
    constructor() {
        this.adminCodes = { ...ADMIN_CODES };
        this.clientCodes = { ...DEFAULT_CLIENT_CODES };
        this.loadStoredCodes();
    }

    // 💾 Cargar códigos guardados del localStorage
    loadStoredCodes() {
        try {
            const stored = localStorage.getItem('passio_client_codes');
            if (stored) {
                const parsed = JSON.parse(stored);
                this.clientCodes = { ...this.clientCodes, ...parsed };
            }
        } catch (error) {
            console.warn('Error cargando códigos guardados:', error);
        }
    }

    // 💾 Guardar códigos en localStorage
    saveClientCodes() {
        try {
            // Solo guardamos los códigos creados dinámicamente
            const dynamicCodes = {};
            Object.entries(this.clientCodes).forEach(([code, data]) => {
                if (code !== 'DEMO2025') { // Excluir el código demo por defecto
                    dynamicCodes[code] = data;
                }
            });
            localStorage.setItem('passio_client_codes', JSON.stringify(dynamicCodes));
        } catch (error) {
            console.warn('Error guardando códigos:', error);
        }
    }

    // ✅ Validar si un código existe y es válido
    validateCode(inputCode) {
        const code = inputCode.toUpperCase().trim();
        
        // Verificar códigos de admin (permanentes)
        if (this.adminCodes[code]) {
            return {
                valid: true,
                type: 'admin',
                data: this.adminCodes[code],
                message: 'Acceso de administrador autorizado'
            };
        }

        // Verificar códigos de cliente (temporales)
        if (this.clientCodes[code]) {
            const codeData = this.clientCodes[code];
            
            if (codeData.permanent || this.isCodeStillValid(codeData)) {
                const daysRemaining = codeData.permanent ? '∞' : this.getDaysRemaining(codeData);
                return {
                    valid: true,
                    type: 'client',
                    data: codeData,
                    daysRemaining: daysRemaining,
                    message: `Acceso autorizado - Cliente: ${codeData.name}`
                };
            } else {
                return {
                    valid: false,
                    type: 'expired',
                    message: 'Su código de acceso ha expirado. Contacte a su ejecutivo para renovar.'
                };
            }
        }

        return {
            valid: false,
            type: 'invalid',
            message: 'Código incorrecto. Verifique el código o contacte a su ejecutivo.'
        };
    }

    // 📅 Verificar si un código temporal aún es válido
    isCodeStillValid(codeData) {
        if (codeData.permanent) return true;
        
        const createdDate = new Date(codeData.created);
        const currentDate = new Date();
        const daysPassed = Math.floor((currentDate - createdDate) / (1000 * 60 * 60 * 24));
        
        return daysPassed <= codeData.validDays;
    }

    // 📊 Obtener días restantes de un código
    getDaysRemaining(codeData) {
        if (codeData.permanent) return Infinity;
        
        const createdDate = new Date(codeData.created);
        const currentDate = new Date();
        const daysPassed = Math.floor((currentDate - createdDate) / (1000 * 60 * 60 * 24));
        
        return Math.max(0, codeData.validDays - daysPassed);
    }

    // 🔑 Generar nuevo código de cliente
    generateClientCode(clientName, validDays = 7) {
        const cleanName = clientName.toUpperCase()
            .replace(/[^A-Z0-9]/g, '')
            .substring(0, 8);
        
        const year = new Date().getFullYear();
        const randomSuffix = Math.floor(Math.random() * 100).toString().padStart(2, '0');
        const code = `${cleanName}${year}${randomSuffix}`;
        
        const codeData = {
            type: 'client',
            name: clientName,
            created: new Date().toISOString().split('T')[0],
            validDays: parseInt(validDays),
            permanent: false,
            redirectTo: 'presentacion.html'
        };

        this.clientCodes[code] = codeData;
        this.saveClientCodes();

        return {
            code: code,
            data: codeData,
            expirationDate: this.getExpirationDate(codeData)
        };
    }

    // 📅 Obtener fecha de expiración
    getExpirationDate(codeData) {
        if (codeData.permanent) return 'Sin expiración';
        
        const createdDate = new Date(codeData.created);
        const expirationDate = new Date(createdDate);
        expirationDate.setDate(createdDate.getDate() + codeData.validDays);
        
        return expirationDate.toLocaleDateString('es-ES');
    }

    // 📊 Obtener estadísticas de códigos
    getStatistics() {
        let activeClients = 0;
        let expiredClients = 0;
        let warningClients = 0;

        Object.values(this.clientCodes).forEach(codeData => {
            if (codeData.permanent) {
                activeClients++;
            } else if (this.isCodeStillValid(codeData)) {
                const daysRemaining = this.getDaysRemaining(codeData);
                if (daysRemaining <= 2) {
                    warningClients++;
                } else {
                    activeClients++;
                }
            } else {
                expiredClients++;
            }
        });

        return {
            totalAdmins: Object.keys(this.adminCodes).length,
            totalClients: Object.keys(this.clientCodes).length,
            activeClients,
            expiredClients,
            warningClients
        };
    }

    // 📋 Obtener todos los códigos para mostrar en admin
    getAllCodes() {
        const allCodes = [];

        // Agregar códigos de admin
        Object.entries(this.adminCodes).forEach(([code, data]) => {
            allCodes.push({
                code,
                ...data,
                status: 'admin',
                daysRemaining: '∞'
            });
        });

        // Agregar códigos de cliente
        Object.entries(this.clientCodes).forEach(([code, data]) => {
            let status = 'active';
            let daysRemaining = '∞';

            if (!data.permanent) {
                daysRemaining = this.getDaysRemaining(data);
                if (!this.isCodeStillValid(data)) {
                    status = 'expired';
                } else if (daysRemaining <= 2) {
                    status = 'warning';
                }
            }

            allCodes.push({
                code,
                ...data,
                status,
                daysRemaining
            });
        });

        return allCodes.sort((a, b) => a.name.localeCompare(b.name));
    }

    // 🔄 Extender vigencia de un código
    extendCode(code, additionalDays) {
        if (this.clientCodes[code] && !this.clientCodes[code].permanent) {
            this.clientCodes[code].validDays += parseInt(additionalDays);
            this.saveClientCodes();
            return true;
        }
        return false;
    }

    // 📝 Registrar acceso (log)
    logAccess(code, success, details = '') {
        const timestamp = new Date().toISOString();
        const codeData = this.adminCodes[code] || this.clientCodes[code];
        const clientName = codeData ? codeData.name : 'Desconocido';
        
        const logEntry = {
            timestamp,
            code,
            clientName,
            success,
            details,
            type: codeData ? codeData.type : 'unknown'
        };

        console.log(`[${timestamp}] ${success ? '✅' : '❌'} ${clientName} (${code}) - ${details}`);
        
        // Guardar en localStorage para histórico (opcional)
        try {
            const logs = JSON.parse(localStorage.getItem('passio_access_logs') || '[]');
            logs.push(logEntry);
            // Mantener solo los últimos 100 registros
            if (logs.length > 100) {
                logs.splice(0, logs.length - 100);
            }
            localStorage.setItem('passio_access_logs', JSON.stringify(logs));
        } catch (error) {
            console.warn('Error guardando log:', error);
        }

        return logEntry;
    }
}

// 🌐 Instancia global del sistema
window.AccessManager = new AccessCodeManager();

// 📤 Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AccessCodeManager, ADMIN_CODES, DEFAULT_CLIENT_CODES };
}