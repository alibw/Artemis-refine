import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";

export const supabaseBrowserClient = createBrowserClient(
  "http://localhost:5000",
  SUPABASE_KEY
);
