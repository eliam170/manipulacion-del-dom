
// Valida que un campo no esté vacío
export function isValidInput(value) {
    return value.trim().length > 0;
}


// Muestra error
export function showError(errorElement, message) {
    errorElement.textContent = message;
}


//  Limpia error
 export function clearError(errorElement) {
    errorElement.textContent = "";
}


// Obtiene iniciales
export function getInitials(name) {

    const words = name
        .trim()
        .split(" ")
        .filter(word => word !== "");

    if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
    }

    let initials = "";

    words.forEach(word => {
        initials += word[0];
    });

    return initials.toUpperCase();
}


// Obtiene la fecha y hora actual formateada
export function getCurrentTimestamp() {

    const now = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    return now.toLocaleString('es-ES', options);
}


// Actualiza contador
export function updateMessageCount(messages, messageCount) {

    const count = messages.length;

    if (count === 1) {
        messageCount.textContent = `${count} mensaje`;
    } else {
        messageCount.textContent = `${count} mensajes`;
    }
}


// Oculta estado vacío
export function hideEmptyState(emptyState) {
    emptyState.classList.add("hidden");
}


// Muestra estado vacío
export function showEmptyState(emptyState) {
    emptyState.classList.remove("hidden");
}