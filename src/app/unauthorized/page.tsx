import { unauthorized } from "next/navigation";

export default function Page() {
    unauthorized();

    return <>これをみることはない</>
}