// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

/**
 * PASOS 1 al 7: Maneja el envío del formulario
 */
export function handleFormSubmit(event, components) {
    // Desestructuramos los componentes para usarlos fácilmente
    const { form, nameInput, msgInput, nameError, msgError, emptyState } = components;

    // PASO 1: Prevenir la recarga de la página
    event.preventDefault(); 
    
    // PASO 2: Validar campos (usando alert y mensajes en pantalla)
    let isValid = true;

    if (nameInput.value.trim() === "") {
        alert("El nombre es obligatorio");
        nameError.textContent = "Por favor, ingresa un nombre"; // Escribe en el span de error
        isValid = false;
    }

    if (msgInput.value.trim() === "") {
        alert("El mensaje no puede estar vacío");
        msgError.textContent = "Por favor, escribe un mensaje";
        isValid = false;
    }

    // Si algo falló, detenemos la ejecución
    if (!isValid) return;

    // PASO 3: Obtener los valores
    const nombre = nameInput.value;
    const texto = msgInput.value;

    // PASO 4: Crear el mensaje (Simulación de creación)
    alert("¡Mensaje de " + nombre + " enviado con éxito!");
    
    // Lógica para ocultar el mensaje de "Aún no hay mensajes"
    if (emptyState) {
        emptyState.style.display = "none";
    }

    // PASO 5: Limpiar el formulario
    form.reset();

    // PASO 6: Limpiar los mensajes de error visuales
    nameError.textContent = "";
    msgError.textContent = "";

    // PASO 7: Enfocar el primer campo
    nameInput.focus();
}

/**
 * Limpia el error de un campo específico cuando el usuario escribe
 */
export function handleInputChange(event, errorElement) {
    // Al escribir, borramos el mensaje de error del span correspondiente
    errorElement.textContent = "";
}
