import { useState } from "react";

interface TableCell {
    data: string;
    index: number;
}

export const TableCell = (props: TableCell) => {
    const { data, index } = props;
    const [flip, setFlip] = useState<boolean>(false)

    console.log(data);

    setTimeout(() => {
        setFlip(true);
        console.log('setting flip')
    }, 100 * index);

    return (
        <td>
            {Array.from(data).map(letter =>
                <div className={`border border-slate-50 border-1 space-x-4 space-x-reverse p-2 bg-rgb(46,46,46) min-w-min h-8 lg:h-10 float-left my-4 bg-black text-white ${flip ? 'rotate-y-360' : null}`}>
                    {flip ? letter : null}
                </div>
            )}
        </td>
    )
}