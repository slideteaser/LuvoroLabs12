"use client";

import { createContext } from "react";
import { Session, User } from "@supabase/supabase-js";

// Create AuthContext
interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({ session: null, user: null, loading: true });