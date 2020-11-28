import { useRef } from 'react'
import { useForm } from "react-hook-form";

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    useDisclosure
  } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons';
import { createSolution } from '@/lib/db';

const SubmitSolutionModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();
    const { handleSubmit, register } = useForm();

    const submitSolution = values => {
        console.log(values);
        createSolution(values);
    };

  
    return (
      <>
        <Button onClick={onOpen} rightIcon={<AddIcon />} colorScheme="black" backgroundColor="black" variant="solid" borderRadius="0" size="lg">
                Submit Solution
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent as="form" onSubmit={handleSubmit(submitSolution)}>
            <ModalHeader fontWeight="bold">Submit Your Solution</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>GitHub Repository Link</FormLabel>
                <Input ref={initialRef} placeholder="GitHub Repo.." borderRadius="0" 
                name="github-repo-link"
                ref={register({
                  required: "Required",
                })}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Preview Link</FormLabel>
                <Input placeholder="Preivew.." borderRadius="0"
                name="preview-link"
                ref={register({
                  required: "Required",
                })}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={onClose} mr={3} borderRadius="0" fontWeight="medium">Cancel</Button>
              <Button type="submit" colorScheme="green" borderRadius="0" fontWeight="medium">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SubmitSolutionModal