import './removeTaskDialog.css';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { LoaderIcon } from '../../assets/icons';
import { Button } from '../Button';
import { Dialog } from '../Dialog';

export const RemoveAllTaskListDialog = ({
  isOpen,
  onClose,
  handleDeleteAllTasks,
  isLoading,
}) => {
  const nodeRef = useRef();

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="remove-all-task-dialog"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <>
        {createPortal(
          <Dialog.Root ref={nodeRef}>
            <Dialog.Body>
              <Dialog.Title>ATENÇÃO!</Dialog.Title>
              <Dialog.SubTitle>
                Tem certeza que deseja remover todas as tarefas?
              </Dialog.SubTitle>
              <Dialog.Content>
                <Button
                  onClick={onClose}
                  disabled={isLoading}
                  size="large"
                  color="secondary"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleDeleteAllTasks}
                  size="large"
                  color="delete"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoaderIcon className="animate-spin" />
                  ) : (
                    'DELETAR'
                  )}
                </Button>
              </Dialog.Content>
            </Dialog.Body>
          </Dialog.Root>,
          document.body
        )}
      </>
    </CSSTransition>
  );
};

RemoveAllTaskListDialog.prototype = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  handleDeleteAllTasks: PropTypes.func.isRequired,
};
