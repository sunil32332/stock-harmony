import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSuppliers() {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("suppliers").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });
}

export function useSuppliersWithCount() {
  return useQuery({
    queryKey: ["suppliers-with-count"],
    queryFn: async () => {
      const { data: suppliers, error } = await supabase.from("suppliers").select("*").order("name");
      if (error) throw error;
      const { data: products } = await supabase.from("products").select("id, supplier_id");
      return suppliers.map((s) => ({
        ...s,
        productsCount: products?.filter((p) => p.supplier_id === s.id).length ?? 0,
      }));
    },
  });
}

export function useCreateSupplier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: { name: string; contact_person?: string; phone?: string; email?: string; address?: string }) => {
      const { error } = await supabase.from("suppliers").insert(data);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["suppliers"] }); qc.invalidateQueries({ queryKey: ["suppliers-with-count"] }); toast.success("Supplier created"); },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useUpdateSupplier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...data }: { id: string; name?: string; contact_person?: string; phone?: string; email?: string; address?: string }) => {
      const { error } = await supabase.from("suppliers").update(data).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["suppliers"] }); qc.invalidateQueries({ queryKey: ["suppliers-with-count"] }); toast.success("Supplier updated"); },
    onError: (e: Error) => toast.error(e.message),
  });
}

export function useDeleteSupplier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("suppliers").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["suppliers"] }); qc.invalidateQueries({ queryKey: ["suppliers-with-count"] }); toast.success("Supplier deleted"); },
    onError: (e: Error) => toast.error(e.message),
  });
}
