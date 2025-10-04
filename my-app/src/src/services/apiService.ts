// src/services/apiService.ts
import { supabase } from '../supabaseClient';
import { User, Expense, Company, Role } from '../types';

/** ---------------- USERS ---------------- **/

// Get all users
export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

// Add a new user
export const addUser = async (user: Partial<User>): Promise<User> => {
  const { data, error } = await supabase.from('users').insert([user]).select();
  if (error) throw error;
  return data[0];
};

/** ---------------- EXPENSES ---------------- **/

// Get all expenses
export const getExpenses = async (): Promise<Expense[]> => {
  const { data, error } = await supabase.from('expenses').select('*');
  if (error) throw error;
  return data;
};

// Add a new expense
export const addExpense = async (expense: Partial<Expense>): Promise<Expense> => {
  const { data, error } = await supabase.from('expenses').insert([expense]).select();
  if (error) throw error;
  return data[0];
};

// Update expense status (Approved/Rejected)
export const updateExpenseStatus = async (id: string, status: string): Promise<Expense> => {
  const { data, error } = await supabase.from('expenses').update({ status }).eq('id', id).select();
  if (error) throw error;
  return data[0];
};

/** ---------------- COMPANY ---------------- **/

// Get all companies
export const getCompanies = async (): Promise<Company[]> => {
  const { data, error } = await supabase.from('companies').select('*');
  if (error) throw error;
  return data;
};

// Add a new company
export const addCompany = async (company: Partial<Company>): Promise<Company> => {
  const { data, error } = await supabase.from('companies').insert([company]).select();
  if (error) throw error;
  return data[0];
};

/** ---------------- APPROVAL WORKFLOW ---------------- **/

// Simulate workflow by role
export const getApprovalWorkflow = (): { [role in Role]: Role[] } => {
  return {
    Employee: ['Manager'],
    Manager: ['Admin'],
    Admin: []
  };
};
