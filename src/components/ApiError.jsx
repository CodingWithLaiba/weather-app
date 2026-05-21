import { RotateCcw } from "lucide-react";
import ErrorIcon from "../assets/images/icon-error.svg";

function ApiError({ retry }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">

      <div className="text-center max-w-md px-6">

        {/* Icon */}
        <div className="flex justify-center mb-6">

          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-white text-2xl">
                <img src={ErrorIcon} alt="Error" />
            </span>
          </div>

        </div>

        {/* Title */}
        <h2 className="text-white text-4xl font-bold mb-4">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          We couldn't connect to the server (API error).
          Please try again in a few moments.
        </p>

        {/* Retry Button */}
        <button
          onClick={retry}
          className="inline-flex items-center gap-2 bg-[hsl(243,23%,30%)] hover:bg-[hsl(243,23%,35%)] transition-colors px-5 py-3 rounded-xl text-white text-sm font-medium"
        >
          <RotateCcw size={16} />
          Retry
        </button>

      </div>

    </div>
  );
}

export default ApiError;