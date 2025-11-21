import { z } from 'zod';

/**
 * Login form validation schema
 * Validates email format for Sensa Unity Portal login
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
});

/**
 * Type for login form data derived from the schema
 */
export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Authentication state interface
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * User interface for authenticated users
 */
export interface User {
  id: string;
  email: string;
  name?: string;
}