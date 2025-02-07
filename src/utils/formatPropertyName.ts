export function formatPropertyName(propertyPath: string) {
  // Divido a string com base no ponto
  const parts = propertyPath.split('.');

  // Seleciono o último elemento
  let lastPart = parts[parts.length - 1];

  // Insiro espaço antes de letras maiúsculas que seguem letras minúsculas (camelCase)
  lastPart = lastPart.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Capitalizo a primeira letra de cada palavra
  lastPart = lastPart
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return lastPart;
}

// Exemplo de uso:
const formatted = formatPropertyName('customer.firstName');
console.log(formatted); // Exibe: "First Name"
