import { PasswordService } from './password.service';
export declare class PasswordController {
    private passwordService;
    constructor(passwordService: PasswordService);
    generatePassword(length: string, special: string): {
        password: string;
    };
}
