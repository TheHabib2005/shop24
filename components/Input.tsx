import React, { FC } from "react";
interface Iprops {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    onClick: () => void;
    loading: boolean;
    value: string;
    handleSubmit: () => void;
}
const Input: FC<Iprops> = ({ onChange, inputRef, onClick, handleSubmit, value }) => {
    return (
        <form onSubmit={handleSubmit}>

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
        </form>
    );
};

export default Input;
