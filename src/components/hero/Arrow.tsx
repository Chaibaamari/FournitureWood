import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const Arrow = () =>{
    return (
        <Button
            variant={"secondary"}
            className="rounded-full w-10 h-10  bg-stone-200 bottom-5"
        >
            <ArrowUpRight className="size-7  rounded-[100%] text-gray-600" />
        </Button>
    );
}

export default Arrow
