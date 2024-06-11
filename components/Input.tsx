import React, { FC } from "react";
interface Iprops {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    onClick: () => void;
    loading: boolean;
    value: string;
}
const Input: FC<Iprops> = ({ onChange, inputRef, onClick, loading, value }) => {
    return (
        <div>
            {" "}
            <input
                // disabled={loading}
                onClick={onClick}
                ref={inputRef}
                onChange={onChange}
                type="text"
                className="  placeholder:text-zinc-400 font-semibold placeholder::text-sm focus:outline-none w-full py-[10px] px-4 rounded-lg border  text-zinc-600 dark:bg-zinc-900 dark:border-zinc-900 dark:text-zinc-300"
                placeholder="Search for Products..."
                value={value}
            />
        </div>
    );
};

export default Input;
