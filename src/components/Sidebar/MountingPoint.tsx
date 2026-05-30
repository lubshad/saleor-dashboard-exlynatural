import exlynaturalMark from "@assets/images/exlynatural-mark.png";
import { useCloud } from "@dashboard/auth/hooks/useCloud";
import { Box, Text, Tooltip } from "@saleor/macaw-ui-next";
import { CloudIcon } from "lucide-react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import { useEnvLink } from "./menu/hooks/useEnvLink";

export const MountingPoint = () => {
  const { isAuthenticatedViaCloud } = useCloud();
  const envLink = useEnvLink();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      display="flex"
      gap={3}
      paddingX={4}
      paddingY={5}
      alignItems="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        as="img"
        src={exlynaturalMark}
        alt=""
        aria-hidden
        __width={32}
        __height={32}
        style={{ objectFit: "contain" }}
      />
      <Text size={3} fontWeight="bold" __flex="1">
        Exlynatural
      </Text>
      {isAuthenticatedViaCloud && (
        <>
          <Tooltip>
            <Tooltip.Trigger>
              <Box
                as="a"
                href={envLink}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                color="default2"
                paddingRight={1}
                style={{
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.15s ease-in-out",
                }}
                data-test-id="cloud-environment-link"
              >
                <CloudIcon size={16} />
              </Box>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">
              <Tooltip.Arrow />
              <Text size={2}>
                <FormattedMessage defaultMessage="Go to Exlynatural Cloud" id="P0omLC" />
              </Text>
            </Tooltip.Content>
          </Tooltip>
        </>
      )}
    </Box>
  );
};
