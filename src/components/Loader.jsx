import { SpinnerCircular } from "spinners-react";

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <SpinnerCircular size={50} thickness={100} speed={100} color="rgba(57, 83, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
    );
}
