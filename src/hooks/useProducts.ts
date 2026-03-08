import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(name), suppliers(name)")
        .order("name");
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      sku: string;
      category_id?: string | null;
      supplier_id?: string | null;
      price: number;
      quantity: number;
      reorder_level: number;
    }) => {
      const { error } = await supabase.from("products").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Product created");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...data }: {
      id: string;
      name?: string;
      sku?: string;
      category_id?: string | null;
      supplier_id?: string | null;
      price?: number;
      quantity?: number;
      reorder_level?: number;
    }) => {
      const { error } = await supabase.from("products").update(data).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Product updated");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      // Check for active transactions
      const { data: txns } = await supabase.from("transactions").select("id").eq("product_id", id).limit(1);
      if (txns && txns.length > 0) {
        throw new Error("Cannot delete product with existing transactions");
      }
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Product deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });
}
