import   {FcGoogle} from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const SignInCard = () => {
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Log in to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                    disabled={false}
                    onClick={()=>{}}
                    variant="outline"
                    size="lg"
                    className="w-full relative">
                        <FcGoogle className="size-5 absolute"/>
                        Continue with google
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};