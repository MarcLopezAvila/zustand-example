import { useCounterStore } from '../../application/global-state';

function Counter() {
    const count = useCounterStore((state) => state.count)

    return (
        <div className="card">
            <h2>count is {count}</h2>
        </div>
    )
}

export default Counter;
