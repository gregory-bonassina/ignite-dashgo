import { Icon, Link as ChackraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink passHref href={href}>
            <ChackraLink display="flex" align="center" {...rest} >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChackraLink>
        </ActiveLink>
    );
}