import type { ServiceItemPost } from "@/redux/features/services/apiSlice";

export const createFormData = (data: ServiceItemPost, file: File | null): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value as string);
    }
  });
  if (file) {
    formData.append('featured_image', file);
  }
  return formData;
};
