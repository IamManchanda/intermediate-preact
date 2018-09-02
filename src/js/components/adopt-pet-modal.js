import React from 'preact-compat';
import Modal from './shared/modal';
import AdoptPetModalContent from './adopt-pet-modal-content';

export default ({ name, toggleModal }) => (
  <Modal>
    <AdoptPetModalContent name={name} toggleModal={toggleModal} />
  </Modal>
);
