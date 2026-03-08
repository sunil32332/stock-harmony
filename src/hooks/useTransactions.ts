import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useTransactions(type?: "IN" | "OUT") {
  return useQuery({
    queryKey: ["transactions", type],
    queryFn: async () => {
      let query = supabase
        .from("transactions")
        .select("*, products(name, sku)")
        .order("created_at", { ascending: false });
      if (type) query = query.eq("transaction_type", type);
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateTransaction() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      product_id: string;
      transaction_type: "IN" | "OUT";
      quantity: number;
      notes?: string;
    }) => {
      const { error } = await supabase.from("transactions").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["transactions"] });
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      qc.invalidateQueries({ queryKey: ["notifications"] });
      toast.success("Transaction recorded");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}
