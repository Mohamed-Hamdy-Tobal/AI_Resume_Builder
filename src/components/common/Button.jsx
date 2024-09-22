import { Button as ShadcnButton } from "@/components/ui/button";

function CustomButton({ children, className, isLoading, variation, disabled, ...props }) {
    let buttonClassName = "inline-flex gap-2 " + className;

    if (variation === "danger") {
        variation = "destructive";
    } else if (variation === "info") {
        buttonClassName += " text-white bg-info hover:bg-info/85";
    } else if (variation === "warning") {
        buttonClassName += " text-white bg-warning hover:bg-warning/85";
    } else if (variation === "outline") {
        buttonClassName += " text-[#2A85FF] border-[#2A85FF] bg-white hover:bg-[#2A85FF]/5 hover:text-[#2A85FF]";
    } else if (variation === "outline-primary") {
        buttonClassName += " text-primary border border-primary hover:bg-primary/90 hover:text-primary-foreground ";
    }

    return (
        <ShadcnButton disabled={isLoading || disabled} variant={variation} className={buttonClassName} {...props}>
            {children}
            {isLoading && <Spinner />}
        </ShadcnButton>
    );
}

export default CustomButton;

const Spinner = () => (
    <div
        className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
    >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
        </span>
    </div>
);
