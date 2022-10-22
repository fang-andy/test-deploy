import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TaskButton } from '../../stories/Button.stories';
import user, { changeView } from "../app/user";

export default function Button_Actions (context) {
  // console.log('context: ', context.url)

  switch (context.ActionType) {
    case 'Embed-Upload':
      return Upload(context);
    case 'Embed-SignUp': 
      return SignUp(context);
    case 'Embed-Calendly':
      return Calendly(context);
    case 'Redirect':
      return Redirect(context);
  }
}

function Upload (context) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let statusColor = {
    "Not Started": '#ffdce5',
    "Pending Review": '#ffebba',
    "Feedback Provided": '#d0f0fd',
    "Completed" : '#d1f7c4'
  }
  const { user_id } = useSelector(state => state.user);
  return (
    <>
      <TaskButton onClick={onOpen} text={context.text}/>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height="50%">
          <Text display="flex" justifyContent='center' p="5%" backgroundColor={statusColor[context.status]}>{context.status}</Text>
          <iframe
            src={context.url+`?prefill_User=${user_id}&prefill_Task=${context.task}&hide_Task=true&hide_User=true`}
            width="100%"
            height="100%"
            frameBorder="0">
          </iframe>
        </ModalContent>
      </Modal>
    </>
  )
}

  function SignUp (context) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user_id } = useSelector(state => state.user);
    return (
      <>
        <TaskButton onClick={onOpen} text={context.text}/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent height="50%">
            <iframe
              src={context.url+`&u-user_recordid=${user_id}`}
              width="100%"
              height="100%"
              frameBorder="0">
            </iframe>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  function Redirect(context) {
    const { connections, user_id } = useSelector(state => state.user);
    const dispatch = useDispatch();
    let filtered;

    // figure out if it redirects to connection page
    if (context.pairing) {

      // use the pairing to find corresponding pairing in state
      const connection = connections.find(element => element.recordid === context.pairing);

      // console.log('the coonoection pairing: ', connection.recordid)

      // filters data into mentor/mentee objects
        let mentor = {
          pairing: connection.recordid,
          id: connection.mentor_user,
          name: connection.mentor_full_name[0],
          photo: connection.mentor_photo[0],
          about: connection.mentor_about[0],
          job: connection.mentor_job[0],
        }
        let mentee = {
          pairing: connection.recordid,
          id: connection.mentee_user,
          name: connection.mentee_full_name[0],
          photo: connection.mentee_photo[0],
          about: connection.mentee_about[0],
          job: connection.mentee_job[0],
        }

        // checks which role the current user corresponds to, to determine who their connection is
        if (mentor.id === user_id) {
          filtered = mentee;
        } else {
          filtered = mentor;
        }
    }

    return (
      <RouterLink to={context.url} state={filtered} style={{ width: "100%" }} onClick={() => dispatch(changeView(context.url.split('/')[1]))}>
        <TaskButton text={context.text}/>
      </RouterLink>
    )
  }
  
  function Calendly(context) {
    // WORK IN PROGRESS
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <TaskButton onClick={onOpen} text={context.text}/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent height="50%">
            <iframe
              src="https://airtable.com/embed/shrUJ0CK8qaILr3Yd"
              width="100%"
              height="100%"
              frameBorder="0">
            </iframe>
          </ModalContent>
        </Modal>
      </>
    )
  }
