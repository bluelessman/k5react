import TailH1 from '../ui/TailH1';
import { Link } from 'react-router-dom';
export default function FrcstHeader() {
    return (
        <div className="container mx-auto w-full">
            <div className="flex flex-row justify-top items-center w-full my-8 ">
                <div className='flex w-full'>
                    <TailH1 title={'기상청 초단기/단기 예보'} />
                </div>
                <div className='w-1/12 flex items-end '>
                    <Link to='/'>Home</Link>
                </div>
            </div>

        </div>
    )
}

