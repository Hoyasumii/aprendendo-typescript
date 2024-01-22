/** 
 * Interface para representar uma conta de usuário.
 * @param { string } username 
 * > Nome de usuário.
 * @param { string } email 
 * > Email do usuário.
 * >
 * > Teste
 * @param { string } password 
 * > Senha do usuário.
*/
export interface Account {
  username: string;
  email: string;
  password: string;
}