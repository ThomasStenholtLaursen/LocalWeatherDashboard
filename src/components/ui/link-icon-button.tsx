import { Link } from "react-router-dom";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Label } from "./label";

type IconButtonProps = {
  icon: React.ReactNode;
  tooltipText?: string;
  withNavigation?: boolean;
} & (
  | { withLink: true; navigateTo: string }
  | { withLink?: false; navigateTo?: never }
);

const LinkIconButton = ({
  icon,
  tooltipText,
  navigateTo,
  withLink = false,
}: IconButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {withLink && navigateTo ? (
          <Link to={navigateTo}>
            <Button size="icon" variant="ghost">
              {icon}
            </Button>
          </Link>
        ) : (
          <Button size="icon" variant="ghost">
            {icon}
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent className="bg-secondary">
        <Label className="text-xs text-foreground">{tooltipText}</Label>
      </TooltipContent>
    </Tooltip>
  );
};

export default LinkIconButton;
