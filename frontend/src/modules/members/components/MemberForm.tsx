import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  address: z.string().min(1, { message: "Required" }),
  ssn: z.string().min(1, { message: "Required" }),
});

interface Inputs {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
}

export function MemberForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  function handleOnSumit(data: Inputs) {
    console.log({ data });
  }

  return (
    <div className="col-span-4 bg-slate-100 p-8 rounded">
      <h1 className="text-slate-500 text-3xl font-light mb-1">
        Create a new member
      </h1>
      <p className="text-slate-400 text-sm font-light mb-4">
        The new members created will be added to the list on the right.
      </p>
      <form onSubmit={handleSubmit(handleOnSumit)}>
        <div className="flex flex-col mb-4">
          <h3 className="text-slate-500 font-light">First Name</h3>
          <Input placeholder="John" {...register("firstName")} />
        </div>
        <div className="flex flex-col mb-4">
          <h3 className="text-slate-500 font-light">Last Name</h3>
          <Input placeholder="Doe" {...register("lastName")} />
        </div>
        <div className="flex flex-col mb-4">
          <h3 className="text-slate-500 font-light">Address</h3>
          <Input placeholder="123 Main Street" {...register("address")} />
        </div>
        <div className="flex flex-col mb-4">
          <h3 className="text-slate-500 font-light">SSN</h3>
          <Input placeholder="333-22-4444" {...register("ssn")} />
        </div>
        <div className="flex justify-between">
          <Button variant="ghost" type="reset">
            Reset
          </Button>
          <Button icon={<PlusIcon className="mr-2 h-4 w-4" />} type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
