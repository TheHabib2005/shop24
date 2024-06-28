import React, { FC, FormEvent } from "react";
interface Iprops {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    onClick: () => void;
    loading: boolean;
    value: string;
    handleSubmit: (e: FormEvent) => void;
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
                className="  placeholder:text-zinc-400 font-semibold placeholder::text-sm focus:border-zinc-800 focus:outline-none w-full py-[10px] px-4 rounded-lg border  text-zinc-600 dark:bg-zinc-950 dark:border-zinc-950 dark:text-zinc-300"
                placeholder="Search for Products..."
                value={value}
            />
        </form>
    );
};

export default React.memo(Input)
