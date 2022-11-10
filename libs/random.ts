export const Chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export function randomId(): string {
  let result = '';

  for (let i = 0; i < 10; i++) {
    result += Chars.charAt(Math.floor(Math.random() * Chars.length));
  }

  return result;
}
