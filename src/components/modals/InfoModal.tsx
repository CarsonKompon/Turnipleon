import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the sequence of Turnip Boy characters. Characters may occur more
        than once, but never next to itself. After each guess, the color of the
        tiles will change to show how close your guess was to the solution.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="G" />
        <Cell value="F" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Turnip Boy is in the solution and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="M" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="present"
        />
        <Cell value="E" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Mayor Onion is in the solution but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Annie is not in the solution in any spot.
      </p>
    </BaseModal>
  )
}
