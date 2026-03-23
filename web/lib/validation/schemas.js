import { z } from "zod";

/**
 * Mensagens de erro customizadas para português
 */
const errorMessages = {
  expenseName: "Nome da despesa entre 1 e 100 caracteres",
  expenseAmount: "Valor deve ser positivo",
  expenseCategory: "Categoria obrigatória",
  expenseDate: "Data inválida",
  expenseKind: "Tipo deve ser 'fixed' ou 'variable'",
  expenseNotes: "Notas não podem ultrapassar 500 caracteres",

  profileName: "Nome entre 1 e 50 caracteres",
  profileEmail: "Email inválido",
  profileCurrency: "Moeda obrigatória",
  profileIncome: "Rendimento mensal deve ser positivo",

  budgetLimit: "Limite orçamental deve ser positivo",
};

/**
 * Schema para criar/editar uma despesa
 */
export const ExpenseSchema = z.object({
  name: z
    .string()
    .min(1, errorMessages.expenseName)
    .max(100, errorMessages.expenseName)
    .trim(),
  amount: z
    .number()
    .positive(errorMessages.expenseAmount)
    .finite()
    .multipleOf(0.01, "Máximo 2 casas decimais"),
  category: z.string().min(1, errorMessages.expenseCategory),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, errorMessages.expenseDate),
  kind: z.enum(["fixed", "variable"], {
    errorMap: () => ({ message: errorMessages.expenseKind }),
  }),
  notes: z
    .string()
    .max(500, errorMessages.expenseNotes)
    .trim()
    .optional()
    .default(""),
  id: z.string().optional(), // Para updates
});

/**
 * Schema para validar dados de perfil
 */
export const ProfileDetailsSchema = z.object({
  name: z
    .string()
    .min(1, errorMessages.profileName)
    .max(50, errorMessages.profileName)
    .trim(),
  email: z
    .string()
    .email(errorMessages.profileEmail)
    .trim()
    .toLowerCase(),
  currency: z.string().min(1, errorMessages.profileCurrency),
  monthlyIncome: z
    .number()
    .positive(errorMessages.profileIncome)
    .finite(),
  plan: z.string().optional(),
});

/**
 * Schema para limites orçamentais por categoria
 */
export const BudgetLimitSchema = z.object({
  Habitação: z.number().nonnegative(errorMessages.budgetLimit),
  Alimentação: z.number().nonnegative(errorMessages.budgetLimit),
  Transportes: z.number().nonnegative(errorMessages.budgetLimit),
  Lazer: z.number().nonnegative(errorMessages.budgetLimit),
  Saúde: z.number().nonnegative(errorMessages.budgetLimit),
});

/**
 * Schema do perfil completo
 */
export const ProfileSchema = z.object({
  details: ProfileDetailsSchema,
  preferences: z.object({
    emailSummary: z.boolean().optional().default(true),
    alerts: z.boolean().optional().default(true),
    weekStartsOn: z.string().optional(),
  }),
  budgetLimits: BudgetLimitSchema,
  expenses: z.array(ExpenseSchema).optional().default([]),
});

/**
 * Schema do estado da aplicação
 */
export const AppStateSchema = z.object({
  selectedProfile: z.string().nullable().optional(),
  profiles: z.record(ProfileSchema),
});

/**
 * Funções helper para validação com feedback
 */
export function validateExpense(data) {
  try {
    return {
      success: true,
      data: ExpenseSchema.parse(data),
    };
  } catch (error) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      message: error.issues[0]?.message || "Validação falhou",
    };
  }
}

export function validateProfileDetails(data) {
  try {
    return {
      success: true,
      data: ProfileDetailsSchema.parse(data),
    };
  } catch (error) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      message: error.issues[0]?.message || "Validação falhou",
    };
  }
}

export function validateBudgetLimits(data) {
  try {
    return {
      success: true,
      data: BudgetLimitSchema.parse(data),
    };
  } catch (error) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      message: error.issues[0]?.message || "Validação falhou",
    };
  }
}

export function validateAppState(data) {
  try {
    return {
      success: true,
      data: AppStateSchema.parse(data),
    };
  } catch (error) {
    return {
      success: false,
      errors: error.flatten().fieldErrors,
      message: error.issues[0]?.message || "Estado inválido",
    };
  }
}
