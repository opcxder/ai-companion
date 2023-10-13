import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingPage = async () => {

    const isPro = await checkSubscription();

    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-medium">Settings</h3>
            <div className="text-muted-foreground text-sm">
                {isPro ? "you are currently on a Pro mode." :"You are currently  on a free mode."}
            </div>
            <SubscriptionButton isPro = {isPro} />
        </div>
    )
}

export default SettingPage;