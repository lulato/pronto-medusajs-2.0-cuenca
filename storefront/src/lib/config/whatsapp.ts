// WhatsApp configuration with region-specific numbers
export const whatsappConfig = {
  defaultNumber: "1234567890", // Default number if region not found
  numbers: {
    // Format: ISO 3166-1 alpha-2 country codes
    MX: "573108588800", // Mexico
    US: "573108588800",  // United States
    CO: "573108588800", // Colombia
    ES: "573108588800",  // Spain
    // Add more regions and numbers as needed
  },
  message: "Hola! Tengo una pregunta sobre mi pedido." // Default message
}
