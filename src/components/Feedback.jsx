import { useState } from "react";

export default function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  return (
    <div className="px-20 py-10 border-t border-[#C9996B]">
      <h3 className="text-2xl font-bold mb-4">Was this guide helpful?</h3>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setYes(yes + 1)} className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-[#EDE9E6]">Yes ({yes})</button>
        <button onClick={() => setNo(no + 1)} className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-[#5C4F4A]">No ({no})</button>
      </div>
      <button onClick={() => { setYes(0); setNo(0); }} className="cursor-pointer border-2 border-[#5C4F4A] px-6 py-2 rounded-lg">Clear</button>
    </div>
  );
}