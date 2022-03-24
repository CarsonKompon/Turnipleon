import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play:" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the sequence of{' '}
        <a
          href="https://snoozykazoo.com/games/turnip-boy-commits-tax-evasion"
          className="underline font-bold"
          target="_blank"
        >
          Turnip Boy
        </a>{' '}
        characters. While we won't tell you them all, there are rules that
        define the way that characters are laid out. There are no duplicates,
        some characters are in certain positions, some characters are paired
        with others, ect. You'll have to play more to find all the hidden rules!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="F" />
        <Cell value="J" />
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
        <Cell value="G" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Mayor Onion is in the solution but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="K" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Annie is not in the solution in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an{' '}
        <a
          href="https://github.com/CarsonKompon/Turnipleon"
          className="underline font-bold"
          target="_blank"
        >
          open source
        </a>{' '}
        Wordle-like game inspired by{' '}
        <a
          href="https://dungleon.com"
          className="underline font-bold"
          target="_blank"
        >
          Dungleon
        </a>
        . Made by{' '}
        <a
          href="https://twitter.com/CarsonKompon"
          className="underline font-bold"
          target="_blank"
        >
          @CarsonKompon
        </a>{' '}
      </p>
    </BaseModal>
  )
}
