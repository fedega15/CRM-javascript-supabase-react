import { supabase } from "../api/config";

export const signInWithMagicLink = async (email) => {
  const result = await supabase.auth.signIn({
    email,
  });
  return result;
};
export const signInWithEmail = async (email, password) => {
  const result = await supabase.auth.signIn({
    email,
    password
  })
  return result
}

export const signUpWithEmail = async (data) => {
  const result = await supabase.auth.signUp(data)
  return result
}

export const logout = async () => {
  const result = await supabase.auth.signOut();
  return result;
};
