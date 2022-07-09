
const errorMessages: any = {
    email: {
        400: 'La contraseña no cumple con los requisitos mínimos de seguridad.',
        409: 'El correo electrónico ya está registrado.',
        500: 'Ha ocurrido un error al establecer contacto con el servidor.',
    },
    phone: {
        400: 'El número de teléfono no cumple con los requisitos mínimos de seguridad.',   
        401: 'Hubo un problema con su autenticacion.',
        500: 'Ha ocurrido un error al establecer contacto con el servidor.',
    },
    verification: {
        400: 'El código de verificación no cumple con el formato establecido.',
        401: 'Código invalido, intenta de nuevo.',
        409: 'Aun no tienes un numero telefonico asignado.',
        500: 'Ha ocurrido un error al establecer contacto con el servidor.',
    },
    info: {
        400: 'La informacion no coincide con datos de perfil.',
        401: 'Hubo un problema con su autenticacion.',
        500: 'Ha ocurrido un error al establecer contacto con el servidor.',   
    },
    profile: {
        401: 'Hubo un problema con su autenticacion.',
        409: 'Aun no has completado tu perfil.',
        500: 'Ha ocurrido un error al establecer contacto con el servidor.',
    }
};

export { errorMessages };