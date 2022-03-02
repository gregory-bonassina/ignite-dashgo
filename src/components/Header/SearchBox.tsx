import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled Components: Ex: salvando os valores do input no estado ( melhor para formulários mais simples )
// Uncontrolled Components: Ex: utilizando useRef para pegar o component de input e pegar o seu valor

// Imperativa vs declarativa

// Imperativo: ex: searchInputRef.current.focus()  está pegando o componente e setando de forma "manual" quando que deseja que aconteça o foco
// Declarativo ex: focus={searchActive === true} está declarando o que precisa que acontece de forma "automática" para conseguir o foco

export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
        >
            <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef}
            />

            <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />
        </Flex>
    );
}