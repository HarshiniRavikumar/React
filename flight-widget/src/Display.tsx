import { useEffect, useState } from "react";
import { TableCell } from "./TableCell";

interface flightData {
    time: string;
    destination: string;
    flight: string;
    gate: string;
    remarks: string;
}
export const Display = () => {

    const [flightData, setFlightdata] = useState<flightData[]>([]);

    useEffect(() => {
        setFlightdata([{
            time: '08:11',
            destination: 'OMAN',
            flight: 'OX 201',
            gate: 'A 01',
            remarks: 'ON TIME'
        },
        {
            time: '08:45',
            destination: 'LONDON',
            flight: 'OX 209',
            gate: 'A 05',
            remarks: 'DELAYED'
        }
        ])
    }, [])

    const headers = ['Time', 'Destination', 'Flight', 'Gate', 'Remarks']
    return (
        <div className="container mx-auto p-6 justify-center align-middle hidden md:block">
            <h2 className="flex row-auto justify-center bg-black text-white font-bold p-4 lg:p-10 shadow-xl rounded-t-lg">{'DEPARTURES'}</h2>
            <div className="flex row-auto justify-center">
                <table className="bg-neutral-700 text-white text-left rounded-b-lg shadow-xl w-full p-10">
                    <thead className="font-semibold">
                        <tr className="w-fit md:w-40 space-x-2">
                            <>
                                <th>{''}</th>
                            </>
                            {
                                headers.map(head => (
                                    <th className="md:w-fit sm:w-80 space-x-4 p-4 lg:p-10">{head}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <>{flightData.length > 0 &&
                                flightData.map((elem, i) => (
                                    <>
                                        <tr className="">
                                            <td className="">✈</td>
                                            {Object.values(elem).map((data, index) => <TableCell data={data} index={index}></TableCell>)}
                                        </tr>
                                    </>
                                ))
                            }</>
                        }

                    </tbody>
                </table>
            </div>

        </div>)
}