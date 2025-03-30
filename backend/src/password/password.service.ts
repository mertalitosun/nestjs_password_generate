import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
    generatePassword(length: number, special: boolean): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        let characters = letters + numbers;
        if (special) {
          characters += symbols;
        }
    
        let password = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
    
        return password;
      }
}
