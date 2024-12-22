import { supabase } from './supabase';
import { useAuthStore } from '../store/authStore';

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (data.user) {
    useAuthStore.getState().setUser(data.user);
    useAuthStore.getState().setIsAuthenticated(true);
  }
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  if (data.user) {
    useAuthStore.getState().setUser(data.user);
    useAuthStore.getState().setIsAuthenticated(true);
  }
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  useAuthStore.getState().setUser(null);
  useAuthStore.getState().setIsAuthenticated(false);
};