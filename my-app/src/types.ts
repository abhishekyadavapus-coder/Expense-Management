// src/types.ts

export type Role = "EMPLOYEE" | "MANAGER" | "ADMIN";

export type ExpenseStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  category: string;
  date: string;
  status: ExpenseStatus;
  description?: string;
}

export interface Company {
  id: string;
  name: string;
  budget: number;
}

export interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
  company: Company | null;
  setCompany: (company: Company | null) => void;
  view: string;
  setView: (view: string) => void;
}
