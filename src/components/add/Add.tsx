import {useCounterStore} from '../../application/global-state';
import shallow from 'zustand/shallow'

interface Props {
    amount: number
}

function Add({ amount }: Props) {
    const increase = useCounterStore((state) => state.increase, shallow)

    return (
        <span style={{ margin: 10 }}>
          <button onClick={() => increase(amount)}>
            Add {amount}
          </button>
        </span>
    )
}

export default Add
