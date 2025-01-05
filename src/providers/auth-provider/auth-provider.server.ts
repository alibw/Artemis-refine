import type { AuthProvider } from "@refinedev/core";
import { createSupabaseServerClient } from "@utils/supabase/server";

export const authProviderServer: Pick<AuthProvider, "check"> = {
  check: async () => {
    const { data, error } = await createSupabaseServerClient().auth.getUser();
    const { user } = data;

    if (error) {
      return {
        authenticated: true
      };
    }

    if (user) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: true
    };
  },
};
