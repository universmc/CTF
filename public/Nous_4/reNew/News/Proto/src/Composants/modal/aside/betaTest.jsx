import React, { useState } from 'react'
import ModalAside from './ModalAside'

function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <ModalAside
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position="right"
        title="Example Modal"
      >
        <p>This is the content of the modal.</p>
      </ModalAside>
    </div>
  )
}