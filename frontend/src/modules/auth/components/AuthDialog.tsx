import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Auth } from "../types";
import { useAuthStore } from "../store";
import { useCreateAuth } from "../hooks";

const authSchema = z.object({
  username: z.string().min(1).trim(),
  password: z.string().min(1).trim(),
});

export function AuthDialog() {
  const { token } = useAuthStore();
  const { isLoading, createAuth } = useCreateAuth();

  const {
    reset,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Auth>({
    resolver: zodResolver(authSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "sarah",
      password: "connor",
    },
  });

  const handleOnSumit = async (data: Auth) => {
    await createAuth(data);
    reset();
  };

  return (
    <Dialog open={!Boolean(token)}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleOnSumit)}>
          <DialogHeader>
            <h2 className="text-slate-500 text-3xl font-light mb-1">Auth</h2>
            <p className="text-slate-400 text-sm font-light mb-4">
              Please login first to access this page
            </p>
          </DialogHeader>
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName" className="text-slate-500 font-light">
              Username
            </label>
            <Input placeholder="sarah" {...register("username")} />
          </div>
          <div className="flex flex-col mb-4">
            <h3 className="text-slate-500 font-light">Password</h3>
            <Input placeholder="connor" {...register("password")} />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!isValid} loading={isLoading}>
              Log in
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
