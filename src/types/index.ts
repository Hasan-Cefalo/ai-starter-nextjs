/**
 * Common type definitions used throughout the application
 */

/**
 * Generic API response type
 */
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * Generic API error type
 */
export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

/**
 * Generic pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

/**
 * Generic paginated response type
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Generic form field error
 */
export interface FieldError {
  field: string;
  message: string;
}

/**
 * Environment variable types
 */
export interface EnvConfig {
  apiUrl?: string;
  enableAnalytics?: boolean;
}
