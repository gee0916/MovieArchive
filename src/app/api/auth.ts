import { supabase } from "@/app/supabaseClient";

export const loginUser = async (email: string, password: string) => {
  const { data: userData } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return userData;
};

export const registerUser = async (email: string) => {
  const { data: userData } = await supabase.from("userInfo").select("email").eq("email", email);
  return userData;
};
