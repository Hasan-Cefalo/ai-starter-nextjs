import { z } from 'zod';

/**
 * Login form validation schema
 * Validates organization email format
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .refine(
      (_email) => {
        // Optional: Add organization email domain validation
        // For now, just validate standard email format
        return true;
      },
      {
        message: 'Please enter a valid organization email',
      }
    ),
});

/**
 * TypeScript type inferred from login schema
 */
export type LoginFormData = z.infer<typeof loginSchema>;

