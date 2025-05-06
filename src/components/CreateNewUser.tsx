import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

export function CreateNewUser() {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return setResult("ko");
    }

    addUser({ name, email, github });
    setResult("ok");
    form.reset();
  };

  return (
    <Card className="rounded-xl mt-5">
      <Title>Create new user</Title>

      <form onSubmit={handleSubmit} className="">
        <TextInput name="name" placeholder="Enter your name" />
        <TextInput name="email" placeholder="Enter your email" />
        <TextInput name="github" placeholder="Enter your GitHub user" />

        <div>
          <Button
            className="mt-2 border-hidden bg-blue-600 text-white rounded-md"
            type="submit"
          >
            Create user
          </Button>
          <span>
            {result === "ok" && (
              <Badge className="text-white bg-green-500 rounded-md p-2 ml-2">
                Saved correctly
              </Badge>
            )}
            {result === "ko" && (
              <Badge className="text-white bg-red-600 rounded-md p-2 ml-2">
                Error on the credentials entered
              </Badge>
            )}
          </span>
        </div>
      </form>
    </Card>
  );
}
